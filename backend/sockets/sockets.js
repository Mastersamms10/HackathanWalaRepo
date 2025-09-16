const { Server } = require('socket.io')
const redisClient = require('../config/redis')

function setupSocket(server) {
  const io = new Server(server, {
    cors: { origin: '*' },
  })

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`)

    socket.on('heartbeat', (userId) => {
      redisClient.set(`presence:${userId}`, 'online', 'EX', 60)
    })

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`)
    })
  })
}

module.exports = { setupSocket }
