const { Schema, model } = require("mongoose");
const Chat = require("./chats.model.js");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    chatHistory: {
        type: Array,
        default: [],
    },
});

module.exports = model("User", UserSchema);
