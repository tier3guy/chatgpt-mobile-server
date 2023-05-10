const routes = require("express").Router();
const {
    HomeRoute,
    RequestPromptRoute,
    LoginRoute,
    SignupRoute,
    DeleteAccountRoute,
    UpdateAccountRoute,
    AddChatRoute,
} = require("./controllers");

// GET Requests
routes.get("/", HomeRoute);

// POST Requests
routes.post("/request-prompt", RequestPromptRoute);
routes.post("/login", LoginRoute);
routes.post("/signup", SignupRoute);
routes.post("/add-chat", AddChatRoute);

// PUT Requests
routes.put("/update-account", UpdateAccountRoute);
routes.put("/clear-chats", ClearChatRoute);

// DELETE Requests
routes.delete("/delete-account", DeleteAccountRoute);

module.exports = routes;
