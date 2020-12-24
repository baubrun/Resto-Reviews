const express = require("express")
const cors = require("cors")
const app = express()
const config = require("./config")
const pgp = require("pg-promise")()


app.use(express.json())
app.use(cors())

app.use("/", express.static("build"))



/*============
Postgres
===========*/


const db = pgp(config.pgUri)
const port = config.PORT

/*============
Listen
===========*/

app.listen(port, () => {
    console.log(`\nServer running on port ${port}!\n`)
})






module.exports = db