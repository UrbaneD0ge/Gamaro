const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gameOrConsole: {
    type: Boolean,
    default: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
