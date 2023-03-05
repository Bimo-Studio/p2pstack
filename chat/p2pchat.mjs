import Hyperswarm from 'hyperswarm'
import goodbye from 'graceful-goodbye'
import crypto from 'hypercore-crypto'
import hypercore from 'hypercore'
import b4a from 'b4a'

//Script to connect to peers via a topic and write to file + stream from the file

const swarm = new Hyperswarm()
goodbye(() => swarm.destroy())

const feed = new hypercore('./p2p-chat-feed', {
  valueEncoding: 'json'
})


// Keep track of all connections and console.log incoming data
const conns = []
// on connection, print this
swarm.on('connection', conn => {
  const name = b4a.toString(conn.remotePublicKey, 'hex')
  console.log('* got a connection from:', name, '*')
  conns.push(conn)
  conn.once('close', () => conns.splice(conns.indexOf(conn), 1))
})

// Broadcast stdin to all connections
process.stdin.on('data', data => {
    feed.append({
        text: data.toString().trim(),
        timestamp: new Date().toISOString()
    })
})

feed.createReadStream({ live: true })
  .on('data', function (data) {
    console.log(`<${data.timestamp}> ${data.nickname}: ${data.text}`)
  })

// Join a common topic
const topic = process.argv[2] ? b4a.from(process.argv[2], 'hex') : crypto.randomBytes(32)
const discovery = swarm.join(topic, { client: true, server: true })

// The flushed promise will resolve when the topic has been fully announced to the DHT
discovery.flushed().then(() => {
  console.log('joined topic:', b4a.toString(topic, 'hex'))
})
