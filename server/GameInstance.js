const nengi = require('../nengi')
const nengiConfig = require('../common/nengiConfig')
const webConfig = { port: 8079 }
const PlayerCharacter = require('../common/entity/PlayerCharacter')
const Identity = require('../common/message/Identity')
const Allowed = require('../common/message/Allowed')
const WeaponFired = require('../common/message/WeaponFired')
const CollisionSystem = require('../common/CollisionSystem')

class GameInstance {
    constructor() {
        this.players = new Map()
        this.collisionSystem = new CollisionSystem()
        this.instance = new nengi.Instance(nengiConfig, webConfig)
        this.instance.onConnect((client, clientData, callback) => {
            //callback({ accepted: false, text: 'Connection denied.'})

            // create a entity for this client
            let entity = new PlayerCharacter()
            this.instance.addEntity(entity) // adding an entity to a nengi instance assigns it an id

            // tell the client which entity it controls (the client will use this to follow it with the camera)
            this.instance.message(new Identity(entity.id), client)

            // establish a relation between this entity and the client
            entity.client = client
            client.entity = entity

            // define the view (the area of the game visible to this client, all else is culled)
            client.view = {
                x: entity.x,
                y: entity.y,
                halfWidth: 99999,
                halfHeight: 99999
            }

            this.players.set(entity.id, entity)

            callback({ accepted: true, text: 'Welcome!' })
        })

        this.instance.onDisconnect(client => {
            this.instance.removeEntity(client.entity)
            this.players.delete(client.entity.id)
        })
    }

    lagCompensatedHitscanCheck(x1, y1, x2, y2, timeAgo, onHit) {
        let area = {
            x: (x1 + x2) / 2,
            y: (y1 + y2) / 2,
            halfWidth: Math.abs(x2 - x1),
            halfHeight: Math.abs(y2 - y1)
        }

        let compensatedEntityPositions = this.instance.historian.getLagCompensatedArea(timeAgo, area)
        compensatedEntityPositions.forEach(entityProxy => {
            // look up the real entity
            let realEntity = this.instance.entities.get(entityProxy.id)

            if (realEntity) {
                let tempX = realEntity.collider.pos.x
                let tempY = realEntity.collider.pos.y

                // rewind
                realEntity.collider.pos.x = entityProxy.x
                realEntity.collider.pos.y = entityProxy.y

                let hit = this.collisionSystem.checkLineCircle(x1, y1, x2, y2, realEntity.collider)

                // restore
                realEntity.collider.pos.x = tempX
                realEntity.collider.pos.y = tempY

                if (hit) {
                    onHit(realEntity)
                }
            }
        })
    }

    update(delta, tick, now) {
        this.acc += delta

        let cmd = null
        while (cmd = this.instance.getNextCommand()) {
            var tick = cmd.tick
            var client = cmd.client

            for (var i = 0; i < cmd.commands.length; i++) {
                var command = cmd.commands[i]
                var entity = client.entity

                if (command.protocol.name === 'MoveCommand') {
                    entity.move(command)
                    entity.weaponSystem.update(command.delta)
                }

                if (command.protocol.name === 'FireCommand') {
                    if (entity.fire()) {

                        let timeAgo = client.latencyRecord.averageLatency + 100

                        this.lagCompensatedHitscanCheck(entity.allowedX, entity.allowedY, command.x, command.y, timeAgo, (victim) => {
                            if (victim.id !== entity.id) {
                                victim.takeDamage(25)
                            }
                        })

                        this.instance.addLocalMessage(new WeaponFired(entity.id, entity.allowedX, entity.allowedY, command.x, command.y))
                    }
                }

            }
        }

        // TODO: the rest of the game logic

        this.instance.clients.forEach(client => {
            client.view.x = client.entity.x
            client.view.y = client.entity.y
            client.entity.update(delta)

            this.instance.message(new Allowed(
                client.entity.allowedX, client.entity.allowedY
            ), client)

        })

        // when instance.updates, nengi sends out snapshots to every client
        this.instance.update()
    }
}

module.exports = GameInstance