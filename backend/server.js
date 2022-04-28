require("./routes/auth.routes");
require("./routes/user.routes");
const { verifySignUp } = require("./middleware");
const controller = require("./controllers/auth.controller");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.post(
  "/api/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  
  controller.signup
);
app.post("/api/auth/signin", controller.signin);

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Hola pibe, estoy corriendo en: ${PORT}.`);
});

const db = require("./models");

const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });
}
