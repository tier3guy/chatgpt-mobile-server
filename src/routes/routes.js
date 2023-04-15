const routes = require("express").Router();
const {
    HomeRoute,
    RequestPromptRoute,
    LoginRoute,
    SignupRoute,
    DeleteAccountRoute,
    UpdateAccountRoute,
} = require("./controllers");

// GET Requests
routes.get("/", HomeRoute);

// POST Requests
routes.post("/request-prompt", RequestPromptRoute);
routes.post("/login", LoginRoute);
routes.post("/signup", SignupRoute);

// PUT Requests
routes.put("/update-account", UpdateAccountRoute);

// DELETE Requests
routes.delete("/delete-account", DeleteAccountRoute);

module.exports = routes;
