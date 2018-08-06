var nengi = require('../nengi')
var nengiConfig = require('../common/nengiConfig')
var ProtocolMap = require('../nengi/core/protocol/ProtocolMap')
var metaConfig = require('../nengi/core/common/metaConfig')
var MoveCommand = require('../common/command/MoveCommand')


var protocolMap = new ProtocolMap(nengiConfig, metaConfig)

var address = 'ws://localhost:8079'
var numberOfBots = 20
var bots = new Map()

function connectNewBot(id) {
    let bot = new nengi.Bot(nengiConfig, protocolMap)
    bot.id = id

    bot.controls = {
        w: false,
        a: false,
        s: false,
        d: false
    }

    bot.onConnect(response => {
        console.log('Bot attempted connection, response:', response)
        bot.tick = 0
    })

    bot.onTransfer(clientData => {})

    bot.onClose(() => {
        bots.delete(bot.id)
    })

    bots.set(bot.id, bot)
    bot.connect(address, {})
}

for (let i = 0; i < numberOfBots; i++) {
    connectNewBot(i)
}

function randomBool() {
    return Math.random() > 0.5
}

var loop = function() {
    bots.forEach(bot => {
        if (bot.connection) {
            // small percent chance of changing which keys are being held down
            // this causes the bots to travel in straight lines, for the most part
            if (Math.random() > 0.95) {
                bot.controls = {
                    w: randomBool(),
                    a: randomBool(),
                    s: randomBool(),
                    d: randomBool(),
                    rotation: Math.random() * Math.PI * 2,
                    delta: 1 / 60
                }
            }

            var input = new MoveCommand(
                bot.controls.w,
                bot.controls.a,
                bot.controls.s,
                bot.controls.d,
                bot.controls.rotation,
                bot.controls.delta
            )

            if (Math.random() > 0.7) {
                // bot.addCommand(new FireCommand(500, 500))
            }

            bot.addCommand(input)
            bot.update()
            bot.tick++
        }
    })
}

setTimeout(() => {
    setInterval(loop, 16)
}, 8000)

