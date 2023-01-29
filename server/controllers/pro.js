const Pro = require("../models/prod_controller");

exports.getAllProduct = (req, res) => {
    Pro.findAll()
        .then((emp) => {
            console.log({ emp });
            res.json(emp);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "no emp found", error: err.message })
        );
};

exports.postCreateProduct = (req, res) => {
    // console.log("ghjk",req.body);
    Pro.create(req.body)
        .then((data) => {
            
           res.json({ message: "pro added successfully", data });
           console.log('test')
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to add new pro",
                error: err.message,
            })
        );
};

exports.putUpdateProduct = (req, res) => {
    console.log("id: ", req.params.id);
    console.log("body: ", req.body);
    Pro.findByIdAndUpdate(req.params.id, req.body)
        .then((emp) => {
            console.log("edit", { emp });
            return res.json({ message: "updated successfully", emp });
        })
        .catch((err) =>
            res
                .status(400)
                .json({ error: "unable to update emp", message: err.message })
        );
};

exports.deleteProduct = (req, res) => {
    Pro.findByIdAndDelete(req.params.id, req.body).then((data) =>
        res
            .json({ message: "emp deleted successfully", data })
            .catch((err) =>
                res
                    .status(404)
                    .json({ error: "book not found", message: err.message })
            )
    )
    .catch((err) =>
            res
                .status(400)
                .json({ error: "unable to delete emp", message: err.message })
        );
};
