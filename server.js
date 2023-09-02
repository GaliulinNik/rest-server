const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//--------подключение БД------------------
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Успешное подключение к базе данных");
  })
  .catch((error) => {
    console.log("Нет содениения с базой данных...\n", error);
    process.exit();
  });
//-----------------------------------------

app.use(express.static(path.join(__dirname, "public")));

app.all("/", function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  response.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  response.header(
    "Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token"
  );
  response.header("Access-Control-Max-Age: 86400");
  next();
});

app.get("/", (request, response) => {
  response.send({ message: "Наш сервис" });
});

app.get("/login", (request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  response.sendFile(`${__dirname}/public/index.html`);
});

app.post("/api/login", (request, response) => {
  console.log("request.body=====", request.body);

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
});

app.get("/main", (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`);
});
app.get("/articles", (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`);
});
app.get("/articles/article/:id", (request, response) => {
  //запрос к базе
  response.sendFile(`${__dirname}/public/index.html`);
});
app.post("/articles/article/", (request, response) => {
  console.log("request================================", request);
  request;
  response.send({ message: "Наш сервис POST" });
});
app.put("/articles/article/", (request, response) => {
  request;
  response.send({ message: "Наш сервис" });
});
app.delete("/articles/article/:id", (request, response) => {
  request;
  response.status(200);
  if (id) {
    //удалем
  } else {
    response.send({ message: "Нет ID" });
  }
});

const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Aplication start on port: ${PORT}`);
});
