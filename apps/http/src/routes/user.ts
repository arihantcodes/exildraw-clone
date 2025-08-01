import {Router} from "express"
import { Signincontrolller, Signupcontroller } from "../controller/user"
import { Verifyjwt } from "../middleware"


const userRouter:Router  = Router()

userRouter.route("/signup").post(Signupcontroller)

userRouter.route("/room").post(Signincontrolller,Verifyjwt)

export default userRouter