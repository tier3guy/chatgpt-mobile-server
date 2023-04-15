const PromptRoute = (async = (req, res) => {
    fetch("https://api.deepai.org/api/text-generator", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "api-key": process.env.DEEPAI_API_KEY,
        },
        body: new URLSearchParams({
            text: req.body.prompt,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            res.status(200).json({
                message: data,
                status: "OK",
                statusCode: 200,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err,
                status: "Error",
                statusCode: 500,
            });
        });
});

module.exports = PromptRoute;
