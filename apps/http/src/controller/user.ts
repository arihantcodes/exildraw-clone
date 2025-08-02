import { ApiResponse } from "../utils/apiresponse";
import { ApiError } from "../utils/apierror";
import { AsyncHandler } from "../utils/asynchandler";
import { RequestHandler } from "express";


const Signupcontroller: RequestHandler = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "ALl Fields are mandotory");
  }

  //  todo create user in database



  const User = {
    email: "t@gmail.com",
    password: "12345567",
  };

  res.json(
    new ApiResponse(
      200,
      {
        User,
      },
      "Signup successful"
    )
  );
});

const Signincontrolller: RequestHandler = AsyncHandler(async (req, res) => {


});

const Roomcontroller:RequestHandler = AsyncHandler (async(req,res) =>{

})

export { Signupcontroller,Roomcontroller,Signincontrolller };
