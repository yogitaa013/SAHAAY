const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String, // Legal or Healthcare
  state: String,
  contact: String,
  link: String
});

module.exports = mongoose.model("Resource", resourceSchema);
