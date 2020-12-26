const db = require("../db");



const create = async (req, res) => {
    const {
        name,
        comment,
        rating,
        restaurant_id,
    } = req.body;
    const text = "INSERT INTO reviews(name, comment, rating, restaurant_id)";
    const values = "VALUES($1, $2, $3, $4)";
    const returning = "RETURNING id, name, comment, rating, restaurant_id";

    try {
        const review = await db.query(`${text} ${values} ${returning}`, [
            name,
            comment,
            rating,
            restaurant_id,
        ]);
        return res.status(200).json({
            review: review.rows[0]
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};


const list = async (req, res) => {
    const {restaurantId} = req.params
    try {
        const reviews = await db.query(
            "SELECT * FROM reviews where restaurant_id = $1",
            [restaurantId]
            );
        return res.status(200).json({
            reviews: reviews.rows
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};




module.exports = {
    create,
    list,
}