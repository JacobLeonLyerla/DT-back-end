const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");


mongoose
  .connect(`mongodb://jake:1test1@ds131954.mlab.com:31954/dream-trekking`)
  .then(() => console.log(`\n====  connected to mongo ====\n`))
  .catch(() => console.log(`error connecting to mongo`));
  server.get("/", (req, res) => {
    res.status(200).json({ api: `the api is running on port ${port}` });
  });