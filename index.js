const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()



const medicalRoute = require("./routes/medical")

// parse application/json
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
app.use("/", medicalRoute)

// Handle 404 Request
app.get('*', (req, res, next) => {
    return res.status(404).json({
        "success" : false,
        "data" : [
            {
                "error" : "Route Undefined",
                "errorMessage" : "No route availble"
            }
        ]
    })
})

// Port Listening
app.listen(process.env.PORT)