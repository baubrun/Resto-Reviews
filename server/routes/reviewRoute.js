const express = require("express")
const ReviewController = require("../controllers/reviewCtrl")

const router = express.Router()


router.route("/api/reviews")
    .post(ReviewController.create)


router.route("/api/reviews/:restaurantId")
    .get(ReviewController.list)





module.exports = router