const { Schema, model } = require("mongoose");
const { ChatSchema } = require("./chats.model.js");

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
        type: [ChatSchema],
        default: [],
    },
});

(module.exports = model("User", UserSchema)), { UserSchema };
