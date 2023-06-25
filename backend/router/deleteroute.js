const express = require("express");
const router = express.Router();

const deletecontroller = require("../controller/deletecontroller");

router.get("/delete/:productid", deletecontroller.deleteuser);

module.exports = router;
