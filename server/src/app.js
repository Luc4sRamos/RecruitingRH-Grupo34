const express = require("express")
const app = express()

app.get("/", (req, res) => { 
    res.send("hola")
})


// Inicio de servidor
const PORT = 3000

app.listen(PORT, () => {
    console.log(`[servidor iniciado en puerto ${PORT}] => [ http://localhost:3000 ]`)
})