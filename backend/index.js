const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json()) // JSON response

// CORS
app.use(cors({
    credentials: true,
    origin: 'http://localhost:19006'
}))

// Archive folder
app.use(express.static('public'))

// Routes
const UserRoutes = require('./routes/UserRoutes')
app.use('/users', UserRoutes)

// Server
app.listen(5000)