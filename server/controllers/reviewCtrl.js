const db = require("../db");



const create = async (req, res) => {
    const { name, comment, rating,  } = req.body;
    console.log('req.body :>>', req.body)
    const text = "INSERT INTO reviews(name, comment, rating)";
    const values = "VALUES($1, $2, $3)";
    const returning = "RETURNING id, name, comment, rating ";
  
    try {
      const review = await db.query(`${text} ${values} ${returning}`, [
        name, 
        comment,
        rating,
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