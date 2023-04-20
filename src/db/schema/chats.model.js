const { Schema, model } = require("mongoose");

const ChatSchema = new Schema({
    __id: {
        type: String,
        required: true,
        unique: true,
    },
    chats: {
        type: Array,
        default: [],
    },
});

(module.exports = model("Chat", ChatSchema)), { ChatSchema };
