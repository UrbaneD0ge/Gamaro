const mongoose = require("mongoose");

const { Schema } = mongoose;

const inventorySchema = new Schema({
  sellerDate: {
    type: Date,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
