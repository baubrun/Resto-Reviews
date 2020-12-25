const express = require("express")
const RestaurantController = require("../controllers/restaurantCtrl")

const router = express.Router()


router.route("/api/reviews")
    .get(RestaurantController.list)
    .post(RestaurantController.create)


router.route("/api/reviews/:reviewsId")
    .put(RestaurantController.update)



module.exports = router