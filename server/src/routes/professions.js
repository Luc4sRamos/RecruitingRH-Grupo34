const express = require("express")
const router = express.Router()
const controller = require("../controllers/professionsController")

// API de profesiones
router.get("/", controller.list)

module.exports = router