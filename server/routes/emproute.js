const express = require("express");

const router = express.Router();

const {

    postCreateEmp,
   
    loginEmp,
 
} = require("../controllers/user");



router.post("/", postCreateEmp);
router.post("/login", loginEmp);



module.exports = router;
