const Emp = require("../models/user_controller");



exports.postCreateUser = (req, res) => {
    console.log("ghjk",req.body);
    Emp.create(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "pro added successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to add new pro",
                error: err.message,
            })
        );
};
exports.loginUser = (req, res) => {
    console.log("ghjkhhdhdh",req.body);
    Emp.login(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "login successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to login",
                error: err.message,
            })
        );
};
