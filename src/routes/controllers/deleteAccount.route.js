const { User } = require("../../db");
const { comparePassword } = require("../../utils");

/**
 * TEST PASSWORD: lQ#Usr27n17E
 * TEST MAIL: avinashgupta.chatgpt@gmail.com
 */

const DeleteAccountRoute = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            const matched = await comparePassword(password, user.password);

            if (matched) {
                const res = await User.deleteOne({ email });
                if (res) {
                    res.status(200).json({
                        message: "User Deleted",
                        status: "OK",
                        statusCode: 200,
                    });
                } else {
                    res.status(400).json({
                        message: "Incorrect password",
                        status: "Error",
                        statusCode: 400,
                    });
                }
            } else {
                res.status(400).json({
                    message: "Incorrect password",
                    status: "Error",
                    statusCode: 400,
                });
            }
        } else {
            res.status(400).json({
                message: "User not found",
                status: "Error",
                statusCode: 400,
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err,
            status: "Error",
            statusCode: 500,
        });
    }
};

module.exports = DeleteAccountRoute;
