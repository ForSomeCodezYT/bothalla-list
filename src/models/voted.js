const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  botid: String,
  voter: String,
});

module.exports = mongoose.model("voters", usersSchema);
