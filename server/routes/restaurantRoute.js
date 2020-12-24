const express = require("express")
const RestaurantController = require("../controllers/restaurantCtrl")

const router = express.Router()


router.route("api/restaurants")
    .get(RestaurantController.list)
    .post(RestaurantController.create)


router.route("api/restaurants/:restaurantId")
    .delete(RestaurantController.remove)
    .get(RestaurantController.read)
    .put(RestaurantController.update)



module.exports = router