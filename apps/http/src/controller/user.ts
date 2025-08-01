import { ApiResponse } from "../utils/apiresponse";
import { ApiError } from "../utils/apierror";
import { AsyncHandler } from "../utils/asynchandler";
import { RequestHandler } from "express";

const Signupcontroller: RequestHandler = AsyncHandler(
  async (req, res, next) => {
    res.json(new ApiResponse(200, {}, "Signup successful"));
  }
);

export { Signupcontroller };
