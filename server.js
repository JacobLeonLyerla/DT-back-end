const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

const PictureRouter = require("./tagRoutes/pictureRouter");
const TagsRouter = require("./tagRoutes/tagRouter");
const AuthRouter = require("./routers/authRouter");
const UserRouter = require("./tagRoutes/userRouter");
const server = express();
server.use(cors());
server.use(express.json());

server.use("/pictures", PictureRouter);
server.use("/tags", TagsRouter);
server.use("/auth", AuthRouter);
server.use("/users",UserRouter)
mongoose
  .connect(`mongodb://jake:1test1@ds131954.mlab.com:31954/dream-trekking`)
  .then(() => console.log(`\n====  connected to mongo ====\n`))
  .catch(() => console.log(`error connecting to mongo`));

server.get("/", (req, res) => {
  res.status(200).json({ api: `the api is running on port ${port}` });
});
const port = process.env.PORT || 5500;

server.listen(port, () => console.log(`\n=== api is up on port: ${port} ==\n`));
