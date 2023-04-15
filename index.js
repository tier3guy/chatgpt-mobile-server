// Imports
const express = require("express");
const app = express();
const routes = require("./src/routes/routes.js");
const cors = require("cors");
const { connect } = require("./src/db");

// Configuring dotenv
require("dotenv").config();

// Setting up the middlewares
app.use(express.json());
app.use(routes);
app.use(cors());

// Connecting to the database
connect();

// Listening to the server
const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
    console.log(
        `\n\n> Listening to the server at : http://localhost:${PORT} ...`
    );
});
