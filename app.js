const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4111

app.use(bodyParser.json())
app.use("/", require("./router"))

app.listen(PORT, console.log("Server start for port: " + PORT))