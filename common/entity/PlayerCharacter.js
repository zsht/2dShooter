const nengi = require('../../nengi')
const WeaponSystem = require('../WeaponSystem')
const SAT = require('sat')

class PlayerCharacter {
    constructor() {
        this.x = 0
        this.y = 0
        this.rotation = 0
        this.hitpoints = 100
        this.isAlive = true

        this.allowedX = 0
        this.allowedY = 0
        this.allowedPath = []

        this.speed = 400

        this.weaponSystem = new WeaponSystem()

        this.collider = new SAT.Circle(new SAT.Vector(this.x, this.y), 25)
    }

    setPosition(x, y) {
        this.x = x
        this.y = y
        this.allowedX = x
        this.allowedY = y
        this.allowedPath = []
        this.collider.pos.x = x
        this.collider.pos.y = y
    }

    takeDamage(amount) {
        if (this.isAlive) {
            this.hitpoints -= amount
        }
        
        if (this.hitpoints <= 0 && this.isAlive) {
            this.hitpoints = 0
            this.isAlive = false

            // DEAD! respawn at random position after 1 second
            setTimeout(() => {
                this.hitpoints = 100
                this.isAlive = 100
                this.setPosition(Math.random() * 500, Math.random() * 500)
            }, 1000)
        }
    }

    fire() {
        if (!this.isAlive) {
            return false
        }

        return this.weaponSystem.fire()
    }

    calculatePathLength() {
        let dist = 0
        let currX = this.x
        let currY = this.y

        for (var i = this.allowedPath.length - 1; i >= 0; i--) {
            let next = this.allowedPath[i]
            let dx = next.x - currX
            let dy = next.y - currY
            let len = Math.sqrt(dx * dx + dy * dy)
            dist += len
            currX = next.x
            currY = next.y
        }
        return dist
    }

    update(delta) {
        // the total length of the path; how desynced the player is
        let totalDist = this.calculatePathLength()

        // how far a normal non-laggy player would be able to move this frame
        let distancePerFrame = this.speed * delta

        let modifier = 1.0
        if (distancePerFrame >= totalDist) {
            // we gud
        } else if (distancePerFrame < totalDist) {
            // more than one tick of desync between allowed xy and player xy
            modifier = Math.pow(totalDist / distancePerFrame, 0.5)
        }

        // clamp: no slower than normal movement speed, no faster than double movement speed
        if (modifier < 1) { modifier = 1 }
        if (modifier > 2) { modifier = 2 }

        // rubberbanding logic
        if (totalDist > 1200) {
            // reset the path, and rubberband the player
            console.log('rubberbanding', this.id)
            this.allowedPath = []
            this.allowedX = this.x
            this.allowedY = this.y
            return
        }

        // how much we are going to allow this entity to move this frame
        let movementBudget = distancePerFrame * modifier

        // while the entity still has movement, and isn't caught up to alleged
        while (movementBudget > 0 && this.allowedPath.length > 0) {
            // head towards the next node
            let next = this.allowedPath.shift()
            let dx = next.x - this.x
            let dy = next.y - this.y

            let distanceToNextNode = Math.sqrt(dx * dx + dy * dy)

            if (movementBudget >= distanceToNextNode) {
                // movement is enough to make it to the next node           
                this.x = next.x
                this.y = next.y
                movementBudget -= distanceToNextNode
            } else if (movementBudget < distanceToNextNode) {
                // movement can only go part way to the next node
                let ux = dx / distanceToNextNode
                let uy = dy / distanceToNextNode

                this.x += ux * movementBudget
                this.y += uy * movementBudget
                movementBudget = 0
            }
        }
        if (this.allowedPath.length === 0) {
            //console.log('path end')
        }

        // keep the collider in sync 
        this.collider.pos.x = this.x
        this.collider.pos.y = this.y
    }

    move(command, isPrediction) {
        if (!this.isAlive) {
            return
        }

        this.rotation = command.rotation

        let unitX = 0
        let unitY = 0

        // create forces from input
        if (command.forward) { unitY -= 1 }
        if (command.backward) { unitY += 1 }
        if (command.left) { unitX -= 1 }
        if (command.right) { unitX += 1 }

        // normalize      
        let len = Math.sqrt(unitX * unitX + unitY * unitY)
        if (len > 0) {
            unitX = unitX / len
            unitY = unitY / len
        }

        this.allowedX += unitX * this.speed * command.delta
        this.allowedY += unitY * this.speed * command.delta

        if (isPrediction) {
            // in prediction  mode, move  the entity to this position immediately
            this.x = this.allowedX
            this.y = this.allowedY
        } else {
            // in non-prediction mode, save this movement as part of a path
            this.allowedPath.push({ x: this.allowedX, y: this.allowedY })
        }
    }
}

PlayerCharacter.protocol = {
    x: { type: nengi.Float32, interp: true },
    y: { type: nengi.Float32, interp: true },
    rotation: { type: nengi.RotationFloat32, interp: true },
    isAlive: nengi.Boolean,
    hitpoints: nengi.UInt8
}

module.exports = PlayerCharacter
