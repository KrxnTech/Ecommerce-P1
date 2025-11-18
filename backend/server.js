
const express = require('express')
const cors = require('cors')

// LOAD ENV FILE 
require('dotenv').config({ path: './config/dbConfig.env' })

const app = express()
app.use(express.json())
app.use(cors())

// TEST ROUTE 
const testRoute = require('./routes/testRoute')
app.use('/api/test-db', testRoute)

// START THE SERVER
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})