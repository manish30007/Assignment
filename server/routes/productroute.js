const express = require("express");

const router = express.Router();
const {
    getAllProduct,
    postCreateProduct,
    putUpdateProduct,
    deleteProduct,
} = require("../controllers/pro");

router.get("/", getAllProduct);

router.post("/", postCreateProduct);

router.put("/:id", putUpdateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;