const express = require("express")
const router = express.Router()
const controller = require("../controllers/aspirantsController")

// API de aspirantes
router.get("/", controller.list)

module.exports = router