require("dotenv/config")


module.exports = {
    pgUri: process.env.PG_URI,
    PORT: process.env.PORT  || 5000,
}