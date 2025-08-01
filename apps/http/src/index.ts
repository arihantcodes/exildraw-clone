import express from "express";

const app = express();
app.use(express.json());

const port = 7070;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
