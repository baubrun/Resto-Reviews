const express = require("express")
const ReviewController = require("../controllers/reviewCtrl")

const router = express.Router()


router.route("/api/reviews")
    .get(ReviewController.list)
    .post(ReviewController.create)


module.exports = router