var express = require('express');
var router = express.Router();


const UserController = require("../controller/userController")  
const IndexController = require("../controller/indexController") 

// router.get("/user" ,IndexController.checkSession ,  IndexController.getUserSignUp) 
// router.get("/" , (req , res) => res.json({n : 4}))
router.get("/" , UserController.getHome)
router.post("/" , UserController.postLandingPage)
// router.get("/user" ,UserController.checkSession ,  UserController.getUserSignUp) 
// router.get("/users" , UserController.getUsers) 
// router.get("/users" , UserController.getUser) 
// router.post("/users" , UserController.createUser) 
// router.post("/users/:name/update" , UserController.updateUser) 
// router.get("/users/:name/delete" , UserController.dropUser) 



// router.post("/issues" ,  FileController.issueUpload.single("upload") , AdminController.createIssue)
// module.exports = router


// router.get("/users/:name" , UserController.getUser)
// // router.post("/issues" ,  FileController.issueUpload.single("upload") , AdminController.createIssue)

module.exports = router;
