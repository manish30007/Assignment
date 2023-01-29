const Emp = require("../models/user_controller");



exports.postCreateEmp = (req, res) => {
    console.log("ghjk",req.body);
    Emp.create(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "emp added successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to add new emp",
                error: err.message,
            })
        );
};
exports.loginEmp = (req, res) => {
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
