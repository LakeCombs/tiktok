import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import tiktokSchema from "./dbModel.js";

//app config
const app = express();
const PORT = process.env.PORT || 9000;

// DB config
const DB = `mongodb+srv://lakecombs:lakecombs@cluster0.droxw.mongodb.net/Tiktok?retryWrites=true&w=majority`;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//middlewares
app.use(express.json());

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("i am the app");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(Data);
});

app.get("/v2/posts", (req, res) => {
  tiktokSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  tiktokSchema.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});
