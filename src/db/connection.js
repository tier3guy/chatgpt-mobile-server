const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connect = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_DB_URI);
        if (res)
            console.log(
                "\n> Connection to Database has been established successfully."
            );
    } catch (err) {
        console.log("\n> Error connecting to MongoDB", err);
    }
};

module.exports = connect;
