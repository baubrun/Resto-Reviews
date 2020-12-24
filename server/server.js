const express = require("express")
const cors = require("cors")
const app = express()
const config = require("./config")
const restaurantRoutes = require("./routes/restaurantRoute")

app.use(express.json())
app.use(cors())

app.use("/", express.static("build"))



app.use("/", restaurantRoutes)


const port = config.PORT





app.listen(port, () => {
    console.log(`\nServer running on port ${port}!\n`)
})


