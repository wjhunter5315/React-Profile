const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
   name: { type: String, required: true },
   style: { type: String, required: true },
   abv: { type: Number },
   ibu: { type: Number },
   description: { type: String },
   date: { type: Date, default: Date.now }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;