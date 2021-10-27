const express = require("express");

const mongoose = require("mongoose");

const helmet = require("helmet");

require('dotenv').config();

const cors = require("cors");

const PictureRouter = require("./tagRoutes/pictureRouter");

const TagsRouter = require("./tagRoutes/tagRouter");

const AuthRouter = require("./routers/authRouter");

const UserRouter = require("./tagRoutes/userRouter");

const CommentRouter = require("./tagRoutes/commentRouter");

const server = express();



server.use(express.json());

server.options('/',cors())
server.use("/pictures", PictureRouter);

server.use("/tags", TagsRouter);

server.use("/auth", AuthRouter);

server.use("/users", UserRouter);

server.use("/comments", CommentRouter);

mongoose
  .connect(`mongodb+srv://Jacob-db:${process.env.PASSWORD}@resume.s2iqz.mongodb.net/dreamDb?retryWrites=true&w=majority`)

  .then(() => console.log(`\n====  connected to mongo ====\n`))

  .catch(() => console.log(`error connecting to mongo`));

server.get("/",cors(), (req, res) => {

  res.status(200).json({ api: `the api is running on port ${port}` });

});

const port = process.env.PORT || 5500;

server.listen(port, () => console.log(`\n=== api is up on port: ${port} ==\n`));
