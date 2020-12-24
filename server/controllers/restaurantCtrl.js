const db = require("../db")


const create = async (req, res) => {
    const {
        name,
        location,
        price_range
    } = req.body

    try {
        const data = await db.query(
            "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING id, name, location",
            [name, location, price_range]
        )
        return res.status(200).json({
            data
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }

}


const list = async (req, res) => {
    try {
        const restaurants = await db.query(
            "SELECT * FROM restaurants"
        )
        return res.status(200).json({
            restaurants: restaurants.rows
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

const read = async (req, res) => {
    const {
        restaurantId
    } = req.params
    try {
        const restaurant = await db.query(
            `SELECT * FROM restaurants WHERE id = ${restaurantId}`
        )
        return res.status(200).json({
            restaurant: restaurant.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}



const remove = async (req, res) => {

}



const update = async (req, res) => {
    const {
        name,
        location,
        price_range
    } = req.body

    try {
        const data = await db.query(
            "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING id, name, location",
            [name, location, price_range]
        )
        return res.status(200).json({
            data
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }

}



module.exports = {
    create,
    list,
    read,
    remove,
    update,
}