// Path: src\db\index.js

const connect = require("./connection");
const User = require("./schema/users.model.js");

module.exports = {
    connect,
    User,
};
