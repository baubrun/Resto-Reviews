const db = require("../db");



const create = async (req, res) => {
    const { name, rating,  } = req.body;
  
    const text = "INSERT INTO reviews(name, rating)";
    const values = "VALUES($1, $2)";
    const returning = "RETURNING id, name, rating ";
  
    try {
      const restaurant = await db.query(`${text} ${values} ${returning}`, [
        name,
        rating,
        ,
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
    try {
      const reviews = await db.query("SELECT * FROM reviews");
      return res.status(200).json({
        reviews: reviews.rows
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message
      });
    }
  };
  



module.exports ={
    create,
    list,
}