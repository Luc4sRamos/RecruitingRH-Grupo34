const express = require("express")
const router = express.Router()
const controller = require("../controllers/applicantsController")

// API de aspirantes
router.get("/", controller.list)
router.post("/create", controller.create)

module.exports = router