const express = require("express")
const app = express()
const cors = require("cors")

// Configuracion de variables de entorno .env
require('dotenv').config()

// Archivos estaticos
app.use(express.static("assets"))

// Rutas de APIs
const applicantsRoute = require("./routes/applicants")
const professionsRoute = require("./routes/professions")

// Configuracion para CRUD
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Endpoints de APIs
app.use("/applicants", applicantsRoute)
app.use("/professions", professionsRoute)

// Inicio de servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`[servidor iniciado en puerto ${PORT}] => [ http://localhost:${PORT} ]`)
})