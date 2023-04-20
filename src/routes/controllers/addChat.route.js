const { User } = require("../../db");
const { comparePassword } = require("../../utils");

/**
 * TEST PASSWORD: lQ#Usr27n17E
 * TEST MAIL: avinashgupta.chatgpt@gmail.com
 */

const AddChatRoute = async (req, res) => {
    const { email, password, chat } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const matched = await comparePassword(password, user.password);

            if (matched) {
                const __chat = await user.chatHistory.find(
                    (cht) => cht.__id === chat.__id
                );

                if (__chat) {
                    await user.updateOne({
                        $set: {
                            chatHistory: { __id: chat.__id, chats: chat.chats },
                        },
                    });
                    return res.status(200).json({
                        message: "Chat Updated Successfully",
                        status: "OK",
                        statusCode: 200,
                    });
                } else {
                    user.chatHistory.push(chat);
                    await user.save();
                    return res.status(200).json({
                        message: "Chat Updated Successfully",
                        status: "OK",
                        statusCode: 200,
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

module.exports = AddChatRoute;
