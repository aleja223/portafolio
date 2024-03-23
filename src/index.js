const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Configurar body-parser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Ruta para manejar la solicitud GET del archivo HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Ruta para manejar la solicitud POST del formulario
app.post("/ruta-del-formulario", (req, res) => {
  console.log("Recibiendo solicitud POST en /ruta-del-formulario");
  // Resto del código para manejar el formulario
});

// Resto de la configuración del servidor
const puerto = 3000;
app.listen(puerto, () => {
  console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
