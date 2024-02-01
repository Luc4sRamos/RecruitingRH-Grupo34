const express = require("express")
const app = express()

// Rutas de APIs
const aspirantsRoute = require("./routes/aspirants")
const professionsRoute = require("./routes/professions")

// Endpoints de APIs
app.use("/aspirants", aspirantsRoute)
app.use("/professions", professionsRoute)

// Inicio de servidor
const PORT = 3000

app.listen(PORT, () => {
    console.log(`[servidor iniciado en puerto ${PORT}] => [ http://localhost:${PORT} ]`)
})