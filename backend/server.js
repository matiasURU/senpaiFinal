require("./routes/auth.routes");
require("./routes/user.routes");
const { verifySignUp } = require("./middleware");
const controller = require("./controllers/auth.controller");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();


//Setear servidor
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//RUTAS

//Registro
app.post(
  "/api/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  
  controller.signup
);
//Inicio sesion
app.post("/api/auth/signin", controller.signin);

//Home Flores
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


const PORT = process.env.PORT || 8080;


//Iniciar servidor
app.listen(PORT, () => {
  console.log(`Hola pibe, estoy corriendo en: ${PORT}.`);
});



////Inicializar Base de datos
const db = require("./models");
const Role = db.role;
db.sequelize.sync().then(() => {
  console.log("Sync");
});
