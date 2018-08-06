class Predictor {
    constructor(simulator) {
        this.simulator = simulator
        this.entity = null
        this.auth = {
            x: null,
            y: null
        }
    }

    setAuthPosition(pos) {
        this.auth.x = pos.x
        this.auth.y = pos.y
    }

    setEntity(entity) {
        this.entity = entity
    }

    predict(commandSets) {
        if (this.entity) {            
            this.entity.allowedX = this.auth.x
            this.entity.allowedY = this.auth.y      

            commandSets.forEach(commandSet => {
                commandSet.forEach(command => {
                    if (command.protocol.name === 'MoveCommand') {
                        this.entity.move(command, true)

                        if (!command.predicted) {
                            this.entity.weaponSystem.update(command.delta)
                            command.predicted = true
                        }                        
                    }
                    
                    if (command.protocol.name === 'FireCommand' && !command.predicted) {
                        if (this.entity.fire()) {
                            this.simulator.simulateShot(this.entity.x, this.entity.y, command.x, command.y)
                            command.predicted = true
                        }
                    }                    
                })
            })
        }
    }
}

module.exports = Predictor