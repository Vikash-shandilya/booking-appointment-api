const express = require("express");
const router = express.Router();

const editroute = require("../controller/editcontroller");

router.post("/submitform", editroute.submitform);

router.get("/", editroute.getall);
router.get("/getuser/:productid", editroute.getuser);

router.get("/edituser/:productid", editroute.editform);

module.exports = router;
