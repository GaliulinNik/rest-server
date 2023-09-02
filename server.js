const bodyParser = require("body-parser");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true })); //стандартный модуль, для парсинга JSON в запросах
app.use(bodyParser.json()); //стандартный модуль, для парсинга JSON в запросах
app.use(favicon(__dirname + "/public/images/favicon.ico")); // отдаем стандартную фавиконку, можем здесь же свою задать
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

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
//--------Обработка ошибок 404, 500------------------
// app.use(function (req, res, next) {
//   res.status(404);
//   console.log("Not found URL: %s", req.url);
//   res.send({ error: "Not found" });
//   return;
// });

// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   console.log(`Internal error(%d): %s ${res.statusCode} ${err.message}`);
//   res.send({ error: err.message });
//   return;
// });
//-----------------------------------------
app.get("/", (request, response) => {
  response.send({ message: "Наш сервис" });
});

app.get("/login", (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`);
});

app.post("/api/login", (request, response) => {
  console.log("request.body=====", request.body);
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

//--------Создание веб-сервера-----------------
const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Aplication start on port: ${PORT}`);
});
