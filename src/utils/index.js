const { hashPassword, comparePassword } = require("./hashing.function.js");
const sendMail = require("./sendMail.function.js");

module.exports = {
    hashPassword,
    comparePassword,
    sendMail,
};
