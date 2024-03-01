const express = require("express")
const router = express.Router()
const controller = require("../controllers/applicantsController")
const { uploadPhoto } = require("../middlewares/multer")

// API de aspirantes
router.get("/", controller.list)
router.post("/create", uploadPhoto.single("file"), controller.create)

module.exports = router