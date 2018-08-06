const nengi = require('../../nengi')

class Allowed {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

Allowed.protocol = {
    x: nengi.Float32,
    y: nengi.Float32
}

module.exports = Allowed
