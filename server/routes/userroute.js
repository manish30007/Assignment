const express = require("express");

const router = express.Router();

const {

    postCreateUser,
   
    loginUser,
 
} = require("../controllers/user");



router.post("/", postCreateUser);
router.post("/login", loginUser);



module.exports = router;
