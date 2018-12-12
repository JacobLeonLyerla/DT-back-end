const router = require('express').Router();

const Tags = require('./tag')


router.get("/", (req, res) => {
    res.status(200).json({ api: "Tags router tested" });
  });
module.exports = router;