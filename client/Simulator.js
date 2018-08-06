const PIXIRenderer = require('./graphics/PIXIRenderer')
const PlayerCharacter = require('../common/entity/PlayerCharacter')
const Predictor = require('./Predictor')
const InputSystem = require('./InputSystem')
const MoveCommand = require('../common/command/MoveCommand')
const FireCommand = require('../common/command/FireCommand')

// ignoring certain data from the sever b/c we will be predicting these properties on the client
const ignoreProps = ['x', 'y', 'rotation']
const shouldIgnore = (myId, update) => {
    if (update.id === myId) {
        if (ignoreProps.indexOf(update.prop) !== -1) {
            return true
        }
    }
    return false
}

class Simulator {
    constructor(client) {
        this.client = client
        this.renderer = new PIXIRenderer()
        this.predictor = new Predictor(this)
        this.input = new InputSystem()
        this.entities = new Map()
        this.myId = -1
    }

    createEntity(entity) {
        if (entity.protocol.name === 'PlayerCharacter') {
            let newEntity = new PlayerCharacter()
            Object.assign(newEntity, entity)
            this.entities.set(newEntity.id, newEntity)
            this.renderer.createEntity(entity)

            if (entity.id === this.myId) {
                this.predictor.setEntity(newEntity)
                // for debugging purposes turn the entity we control white
                this.renderer.entities.get(entity.id).body.tint = 0xffffff
            }
        }
    }

    updateEntity(update) {
        if (!shouldIgnore(this.myId, update)) {
            let entity = this.entities.get(update.id)
            entity[update.prop] = update.value
            this.renderer.updateEntity(update)
        }
    }

    deleteEntity(id) {
        this.renderer.deleteEntity(id)
        this.entities.delete(id)
    }

    processMessage(message) {
        if (message.protocol.name === 'Identity') {
            this.myId = message.entityId
            console.log('identified as', this.myId)
        }

        if (message.protocol.name === 'Allowed') {
            this.predictor.setAuthPosition(message)
        }
    }

    processLocalMessage(message) {
        if (message.protocol.name === 'WeaponFired') {
            console.log('server says a weapon was fired')
            this.renderer.drawHitscan(message.x, message.y, message.tx, message.ty, 0xff0000)
        }
    }

    processJson(json) { }

    simulateShot(x, y, tx, ty) {
        // TODO: simulate impact against entities/terrain
        this.renderer.drawHitscan(x, y, tx, ty, 0xffffff)
    }

    update(delta) {
        let input = this.input.frameState

        let rotation = 0
        let worldCoord = this.renderer.toWorldCoordinates(this.input.currentState.mx, this.input.currentState.my)

        if (this.predictor.entity) {
            let dx = worldCoord.x - this.predictor.entity.x
            let dy = worldCoord.y - this.predictor.entity.y
            rotation = Math.atan2(dy, dx)
        }  

        this.client.addCommand(new MoveCommand(input.w, input.a, input.s, input.d, rotation, delta))

        if (input.mouseDown) {
            this.client.addCommand(new FireCommand(worldCoord.x, worldCoord.y))
        }

        this.input.releaseKeys()

        this.predictor.predict(this.client.getUnconfirmedCommands())
        if (this.predictor.entity) {
            let entity = this.predictor.entity
            this.renderer.move(entity.id, entity.x, entity.y, rotation)
            this.renderer.centerCamera(entity)
        }
        this.renderer.update()
    }
}

module.exports = Simulator