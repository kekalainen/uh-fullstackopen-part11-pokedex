const express = require('express')
const app = express()
const logger = require('./src/logger')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/healthz', (_req, res) => {
  res.status(500).send()
})

app.get('/varz', (_req, res) => {
  res.send('static_value 2')
})

app.listen(PORT, () => {
  logger.info('server started on port 5000')
})
