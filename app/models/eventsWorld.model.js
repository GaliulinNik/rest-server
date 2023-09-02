//опишем схему БД, что хотим сохранить
const mongoose = require("mongoose");
//делаем схему
const eventsWorldSchema = mongoose.Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("eventsWorld", eventsWorldSchema);
