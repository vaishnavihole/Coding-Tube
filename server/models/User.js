const mongoose = require("mongoose");

const User = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
})

const model = mongoose.model("User",User);

module.exports = model;