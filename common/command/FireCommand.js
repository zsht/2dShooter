const nengi = require('../../nengi')

class FireCommand {
    constructor(x, y) {
        // x,y or angle are both okay ways to represent firing
        this.x = x
        this.y = y
    }
}

FireCommand.protocol = {
    x: nengi.UInt32,
    y: nengi.UInt32
}

module.exports = FireCommand
