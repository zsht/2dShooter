const nengi = require('../nengi')
const nengiConfig = require('../common/nengiConfig')
const Simulator = require('./Simulator')

// interp delay, how long the interpolator holds data before begining to draw it
// this must be *at least* as long a server tick (e.g. 50 at 20 fps) and double is usually better
const interpDelay = 100

class GameClient {
    constructor() {

        this.client = new nengi.Client(nengiConfig, interpDelay) 
        this.simulator = new Simulator(this.client)

        this.client.onConnect(res => {
            console.log('onConnect response:', res)
        })

        this.client.onTransfer(clientData => {
            console.log('client transfer', clientData)
        })

        this.client.onClose(() => {
            console.log('connection closed')
        })

        if (window.location.href.indexOf('localhost') > -1) {
            this.client.connect('ws://localhost:8079')
        } else {
            // example of a production ip address
            this.client.connect('ws://173.199.127.115:8079')
        }
    }

    update(delta, tick, now) {
        let network = this.client.readNetwork()

        network.entities.forEach(snapshot => {
            snapshot.createEntities.forEach(entity => {
                this.simulator.createEntity(entity)
            })
    
            snapshot.updateEntities.forEach(update => {
                this.simulator.updateEntity(update)
            })
    
            snapshot.deleteEntities.forEach(id => {
                this.simulator.deleteEntity(id)
            })
        })

        network.messages.forEach(message => {
            this.simulator.processMessage(message)
        })

        network.localMessages.forEach(localMessage => {
            this.simulator.processLocalMessage(localMessage)
        })

        this.simulator.update(delta)
        this.client.update()
    }
}

module.exports = GameClient
