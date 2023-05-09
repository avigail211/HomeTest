const userController = require("../controllers/user");
const routerUser = require("express").Router();
// const upload=require("../middlwares/upload")
routerUser.get("",userController.getAllUsers);
routerUser.get("/:identity",userController.getUserById);
routerUser.get("/:code",userController.getUserByUserCode);
routerUser.post("",userController.addUser);
routerUser.delete("/:id",userController.deleteUser);
// routerEvent.post("",upload.single('img'),eventController.addEvent);
module.exports=routerUser;