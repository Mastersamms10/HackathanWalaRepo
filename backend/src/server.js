const http = require('http')
const app = require('./app')
const { setupSocket } = require('./sockets/socket')

const server = http.createServer(app)
setupSocket(server) // WebSocket integration

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
