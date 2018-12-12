const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

const TagsRouter = require("./tagRoutes/tagRouter")

const server = express();
server.use(cors());
server.use(express.json());

server.use("/tags", TagsRouter)

mongoose
  .connect(`mongodb://jake:1test1@ds131954.mlab.com:31954/dream-trekking`)
  .then(() => console.log(`\n====  connected to mongo ====\n`))
  .catch(() => console.log(`error connecting to mongo`));

  server.get("/", (req, res) => {
    res.status(200).json({ api: `the api is running on port ${port}` });
  });
  const port = process.env.PORT || 5500;

  server.listen(port, () => console.log(`\n=== api is up on port: ${port} ==\n`));
  