module.export = (app) => {
  const eventsWorld = require("../controlles/eventsWorld.controller");
};
//создание события
app.post("/event", eventsWorld.create);

//получить все события
app.get("/events", eventsWorld.findAll);

//получить определнные события
app.get("/event/:id", eventsWorld.findOne);

//обновить информацию о событии
app.put("/event/:id", eventsWorld.update);

//удалить события
app.delete("/event/:id", eventsWorld.delete);
