const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 50,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6
    },
});

module.exports = mongoose.model("User",UserScheme);