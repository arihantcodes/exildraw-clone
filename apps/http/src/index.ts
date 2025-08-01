import express from "express";
import userRouter from "./routes/user";
import dotenv from 'dotenv'

dotenv.config()



const app = express();
app.use(express.json());

const port = 7070;


app.use("/api/v1",userRouter)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


