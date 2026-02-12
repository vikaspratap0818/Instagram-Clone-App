const express=require('express');
const authController=require("../controllers/auth.contoller");

const authRouter=express.Router()


/**
 * POST /api/auth/register
 */
authRouter.post('./register',authController.loginController)

/**
 * POST /api/auth/login
 */
authRouter.post('./login',authController.loginController)

module.exports=authRouter;