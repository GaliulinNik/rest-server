const { request, response } = require("express");
const eventsWorld = require("../models/eventsWorld.model");

//реализуем обработку наших запросов реста

//Создание события
exports.create = (request, response) => {
  //валидация данных
  if (!request.body.name) {
    return request.status(400).send({
      message: "Наименование события не может быть пустым",
      success: false,
    });
  }

  if (!request.body.description) {
    return request.status(400).send({
      message: "Описание события не может быть пустым",
      success: false,
    });
  }

  const eventWorld = new eventWorld({
    name: request.body.name,
    description: request.body.description,
  });
  eventWorld
    .save()
    .then((date) => {
      response.send(data);
    })
    .catch((error) => {
      response.status(500).send({
        message: `Данные не записались: ${error.message}`,
        success: false,
      });
    });
};

//получение всех событий
exports.findAll = (request, response) => {};
//получение одного события
exports.findOne = (request, response) => {};
//обновить информацию о событии
exports.update = (request, response) => {};
//удалить событие
exports.delete = (request, response) => {};
