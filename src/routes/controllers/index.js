// Path: src\routes\controllers\request-prompt.route.js

const HomeRoute = require("./home.route.js");
const RequestPromptRoute = require("./prompt.route.js");
const LoginRoute = require("./login.route.js");
const SignupRoute = require("./signup.route.js");
const DeleteAccountRoute = require("./deleteAccount.route.js");
const UpdateAccountRoute = require("./updateAccount.route.js");
const AddChatRoute = require("./addChat.route.js");
const ClearChatRoute = require("./clearChats.route.js");

module.exports = {
    HomeRoute,
    RequestPromptRoute,
    LoginRoute,
    SignupRoute,
    DeleteAccountRoute,
    UpdateAccountRoute,
    AddChatRoute,
    ClearChatRoute,
};
