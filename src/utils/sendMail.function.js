const nodemailer = require("nodemailer");

const sendMail = (Subject, Text, To) => {
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.MAIL_ID,
        to: To,
        subject: Subject,
        text: Text,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return {
                status: "failed",
                result: err,
            };
        } else {
            return {
                status: "success",
                result: info,
            };
        }
    });
};

module.exports = sendMail;
