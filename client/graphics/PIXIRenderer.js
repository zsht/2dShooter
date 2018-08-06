const PlayerCharacter = require('./PlayerCharacter')
const BackgroundGrid = require('./BackgroundGrid')

const GAME_WIDTH = 1280
const GAME_HEIGHT = 720

class PIXIRenderer {
    constructor(input, sounds) {
        this.canvas = document.getElementById('main-canvas')

        this.masterScale = 1
        this.myEntity = null
        this.entities = new Map()

        this.renderer = PIXI.autoDetectRenderer(GAME_WIDTH, GAME_HEIGHT, {
            view: this.canvas,
            antialiasing: false,
            transparent: false,
            resolution: 1
        })

        this.stage = new PIXI.Container()
        this.camera = new PIXI.Container()
        this.background = new PIXI.Container()
        this.middleground = new PIXI.Container()
        this.foreground = new PIXI.Container()

        this.camera.addChild(this.background)
        this.camera.addChild(this.middleground)
        this.camera.addChild(this.foreground)
        this.stage.addChild(this.camera)

        this.background.addChild(new BackgroundGrid())

        window.addEventListener('resize', () => {
            this.resize()
        })

        this.resize()
    }

    drawBulletEnd(alreadyHitPlayer, x, y) {
        if (alreadyHitPlayer) return
        var effect = new ImpactEffect(x, y)
        this.camera.addChild(effect)
        this.effects.push(effect)
    }

    resize() {
        let targetRatio = 16 / 9
        let newWidth = window.innerWidth
        let newHeight = window.innerHeight
        let newRatio = newWidth / newHeight

        if (newRatio > targetRatio) {
            newWidth = newHeight * targetRatio
            this.canvas.style.width = newWidth + 'px'
            this.canvas.style.height = newHeight + 'px'
        } else {
            newHeight = newWidth / targetRatio
            this.canvas.style.width = newWidth + 'px'
            this.canvas.style.height = newHeight + 'px'
        }
        this.canvas.style.marginTop = -newHeight / 2 + 'px'
        this.canvas.style.marginLeft = -newWidth / 2 + 'px'

        this.canvas.style.position = 'absolute'
        this.canvas.style.top = '50%'
        this.canvas.style.left = '50%'

        this.renderer.resize(GAME_WIDTH, GAME_HEIGHT)
        this.camera.scale.set(this.masterScale)
    }

    createEntity(entity) {
        if (entity.protocol.name === 'PlayerCharacter') {
            let clientEntity = new PlayerCharacter(entity)
            this.entities.set(entity.id, clientEntity)
            this.middleground.addChild(clientEntity)
        }
    }

    updateEntity(update) {
        let entity = this.entities.get(update.id)
        entity[update.prop] = update.value
    }

    message(message) {

    }

    deleteEntity(id) {
        if (this.entities.get(id)) {
            this.foreground.removeChild(this.entities.get(id))
            this.middleground.removeChild(this.entities.get(id))
            this.entities.delete(id)
        }
    }

    localMessage(message) {
        if (message.protocol.name === 'WeaponFired') {

        }
    }

    drawHitscan(x, y, targetX, targetY, color) {
        let graphics = new PIXI.Graphics()
        graphics.lineStyle(1, color)
        graphics.moveTo(x, y)
        graphics.lineTo(targetX, targetY)
        this.middleground.addChild(graphics)
        setTimeout(() => {
            this.middleground.removeChild(graphics)
            graphics.destroy({
                children: true,
                texture: true,
                baseTexture: true
            })
        }, 64)        
    }

    centerCameraAndFollowScope(entity, scopeStrength, delta) {
        let halfCanvasWidth = GAME_WIDTH * 0.5
        let halfCanvasHeight = GAME_HEIGHT * 0.5
        let magicCanvasHeight = GAME_HEIGHT * 0.71875 // 0.5 adjusted to 16:9 resolution's disparity between horizontal and vertical
        // TODO: cache this on window resize
        let windowWidth = window.innerWidth
        let windowHeight = window.innerHeight

        // how off center the mouse is
        let dx = this.input.currentState.mx - windowWidth * 0.5
        let dy = this.input.currentState.my - windowHeight * 0.5

        // length of the mouse's vector, from center
        let vlen = Math.sqrt(dx * dx + dy * dy)
        // maxmimum length of the vector if it went to the screen edge
        let mlen = Math.sqrt(
            windowWidth * 0.5 * windowWidth * 0.5 +
            windowHeight * 0.5 * windowHeight * 0.5
        )
        // unit vector (direction that the vector points, without magnitude)
        let normX = dx / vlen
        let normY = dy / vlen
        // how much the player is trying to scope, from 0 - 1.0 based on how far away the mouse is from the character
        let scopeAmount = vlen / mlen

        // new camera position (the math says center the camera on the player, then offset in the scope direction+amount, then offset it by the kickAmount)
        let targetX =
            -entity.x * this.masterScale +
            halfCanvasWidth +
            -normX * scopeAmount * scopeStrength * halfCanvasWidth +
            this.kickAmount * normX
        let targetY =
            -entity.y * this.masterScale +
            halfCanvasHeight +
            -normY * scopeAmount * scopeStrength * halfCanvasHeight +
            this.kickAmount * normY

        // difference between where the camera is an where the camera should be (for gentle movement of the camera)
        let dx0 = targetX - this.camera.x
        let dy0 = targetY - this.camera.y
        let adjustmentStrength = 20

        let cameraX = Math.round(
            this.camera.x + dx0 * adjustmentStrength * delta
        )
        let cameraY = Math.round(
            this.camera.y + dy0 * adjustmentStrength * delta
        )

        this.camera.x = cameraX
        this.camera.y = cameraY
    }

    centerCamera(entity) {
        this.camera.x = -entity.x * this.masterScale + 0.5 * GAME_WIDTH
        this.camera.y = -entity.y * this.masterScale + 0.5 * GAME_HEIGHT
    }

    toWorldCoordinates(mouseX, mouseY) {
        let rect = this.canvas.getBoundingClientRect() // cache this instead of call it repeatedly maybe?
        let domScale = rect.width / GAME_WIDTH

        let adjustedMouseX = (mouseX / this.masterScale - window.innerWidth * 0.5 / this.masterScale) * (1 / domScale)
        let adjustedMouseY = (mouseY / this.masterScale - window.innerHeight * 0.5 / this.masterScale) * (1 / domScale)

        let camScaledX = this.camera.x / this.masterScale - GAME_WIDTH / (this.masterScale * 2)
        let camScaledY = this.camera.y / this.masterScale - GAME_HEIGHT / (this.masterScale * 2)

        return {
            x: adjustedMouseX - camScaledX,
            y: adjustedMouseY - camScaledY
        }
    }

    /*
    showOnHitEffect(entityId, color) {
        let entity = this.entities.get(entityId)
        if (entity) {
            if (GAME_CONSTANTS.DEBUG.RENDER_HITBOXES) {
                let graphics = new PIXI.Graphics()
                graphics.lineStyle(1, color)
                graphics.drawCircle(entity.x, entity.y, 10)
                this.middleground.addChild(graphics)
                setTimeout(() => {
                    this.middleground.removeChild(graphics)
                    graphics.destroy({
                        children: true,
                        texture: true,
                        baseTexture: true
                    })
                }, 64)
            }
        }
    }
    */

    move(id, x, y, rotation) {
        let entity = this.entities.get(id)
        entity.x = x
        entity.y = y
        entity.rotation = rotation
    }


    update(delta) {
        if (this.myEntity) {
            this.centerCameraAndFollowScope(this.myEntity, 0.5, delta)
        }

        this.entities.forEach(entity => {
            entity.update(delta)
        })

        this.renderer.render(this.stage)
    }
}

module.exports = PIXIRenderer
