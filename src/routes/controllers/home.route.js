const HomeRoute = async (req, res) => {
    res.status(200).json({
        message: "ChatGPT - Mobile Server is Live !",
        status: "OK",
        statusCode: 200,
    });
};

module.exports = HomeRoute;
