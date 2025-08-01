import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../src/utils/apiresponse";
import { Usertype } from "./global";
interface CustomRequest extends Request {
  userId?: string;
}
export const Verifyjwt = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"] ?? "";
  const decode = jwt.verify(token, process.env.JWT_SECRET!) as {
    UserID: string;
  };
  if (decode) {
    req.userId = decode.UserID;
    next();
  } else {
    res.json(new ApiResponse(401, "Unauthorization Request"));
  }
};
