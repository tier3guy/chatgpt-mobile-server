const { User } = require("../../db");
const { hashPassword } = require("../../utils");

/**
 * TEST PASSWORD: lQ#Usr27n17E
 * TEST MAIL: avinashgupta.chatgpt@gmail.com
 */

const SignupRoute = async (req, res) => {
    const { email, password, username } = req.body;
    const hashedPassword = await hashPassword(password);

    try {
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).json({
                message: "User already exists",
                status: "Error",
                statusCode: 400,
            });
        } else {
            const newUser = new User({
                username,
                email,
                password: hashedPassword,
            });

            await newUser.save();

            res.status(200).json({
                message: "User created",
                status: "OK",
                statusCode: 200,
                user: newUser,
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

module.exports = SignupRoute;
