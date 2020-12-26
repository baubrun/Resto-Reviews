const db = require("../db");


const create = async (req, res) => {
  const {
    name,
    location,
    price_range
  } = req.body;

  const text = "INSERT INTO restaurants(name, location, price_range)";
  const values = "VALUES($1, $2, $3)";
  const returning = "RETURNING id, name, location, price_range";

  try {
    const restaurant = await db.query(`${text} ${values} ${returning}`, [
      name,
      location,
      price_range,
    ]);
    return res.status(200).json({
      restaurant: restaurant.rows[0]
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};


const list = async (req, res) => {
  const text = `SELECT * from restaurants LEFT JOIN
  (SELECT restaurant_id, COUNT(*), 
  TRUNC(AVG(rating), 1) as avg_rating from reviews 
  GROUP BY restaurant_id)
  reviews on restaurants.id = reviews.restaurant_id;`
  try {
    const restaurants = await db.query(text);
    return res.status(200).json({
      restaurants: restaurants.rows
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};


const read = async (req, res) => {
  const {
    restaurantId
  } = req.params;
  try {
    const text = `SELECT * from restaurants LEFT JOIN
    (SELECT restaurant_id, COUNT(*), 
    TRUNC(AVG(rating), 1) as avg_rating from reviews 
    GROUP BY restaurant_id)
    reviews on restaurants.id = reviews.restaurant_id
    WHERE id = $1`;

    const restaurant = await db.query(
      text,
      [restaurantId]
    );
    return res.status(200).json({
      restaurant: restaurant.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};


const remove = async (req, res) => {
  const {
    restaurantId
  } = req.params;
  try {
    const deletedId = await db.query(
      "DELETE from restaurants WHERE id = $1 RETURNING id",
      [restaurantId]);
    return res.status(200).json({
      restaurantId: deletedId.rows[0].id
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};


const update = async (req, res) => {
  const {
    name,
    location,
    price_range
  } = req.body;
  const {
    restaurantId
  } = req.params;
  const text =
    "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4";
  const returning = "RETURNING *";

  try {
    const restaurant = await db.query(`${text} ${returning}`, [
      name,
      location,
      price_range,
      restaurantId,
    ]);
    return res.status(200).json({
      restaurant: restaurant.rows[0]
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
  read,
  remove,
  update,
};