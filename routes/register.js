var express = require('express');
var router = express.Router();
const registerController = require("./../contollers/RegisterController");

router.get("/", registerController.getRegister);
router.get("/:id", registerController.getOneRegister);
router.post("/", registerController.insert);


module.exports = router;
