const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
goat_color: String,
goat_breed: String,
goat_price: Number
})
module.exports = mongoose.model("Costume",costumeSchema)