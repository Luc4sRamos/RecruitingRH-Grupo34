const multer = require("multer")
const path = require("path")

const storagePhotos = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../assets/images"))
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname
        cb(null, fileName)
    }
})

const uploadPhoto = multer({ storage: storagePhotos })

module.exports = {
    uploadPhoto
}
