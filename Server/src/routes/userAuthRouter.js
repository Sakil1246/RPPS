const express=require('express');
const userRouter=express.Router();
const userController=require(".../controllers/userController");
userRouter.post("/signup",userController.signup);
userRouter.post("/login",userController.login);
userRouter.get("/logout",userController.logout);