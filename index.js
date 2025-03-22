
const express = require("express");
const app = express();


require("dotenv").config();  //levanta Variables de Entorno

app.get('/', (req, res) => {
    res.send("Hola Mundo!!!");
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 
