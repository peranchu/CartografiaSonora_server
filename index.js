const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config(); //levanta Variables de Entorno
const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.static(path.join(__dirname,"public"))); //carpeta publica

//Configuraciçon comunicación HTTP
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Configuración subida Archivos al servidor
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/temp'
}));



//RUTAS
const mainRouter = require("./src/routes/main.router"); //Acceso Modulo Rutas main
app.use(mainRouter);

//Conexión Base de Datos y levanta el Servidor express
const uri = "mongodb://localhost:27017/prueba";
mongoose.Promise = global.Promise;

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  console.log("conexión a la base de datos correcta");

  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
});




