const { Schema, model } = require("mongoose");

const ChatSchema = new Schema({
    chats: {
        type: Array,
        default: [],
    },
});

module.exports = model("Chat", ChatSchema);
