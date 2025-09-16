const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const socketSetup = require('./sockets/socket')
const routes = require('./routes')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 })) // basic rate limiting

// Routes
app.use('/api', routes)

// Health check
app.get('/healthz', (req, res) => res.send('OK'))

module.exports = app
