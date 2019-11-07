var express = require('express');
var router = express.Router();
const registerController = require("./../contollers/RegisterController");

router.get("/", registerController.getRegister);
router.get("/:id", registerController.getOneRegister);
router.post("/", registerController.insert);
router.delete("/:id", registerController.deleteOneRegister);
router.put("/", registerController.updateRegister);
router.patch("/", registerController.updateRegister);


module.exports = router;
