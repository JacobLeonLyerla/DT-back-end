const router = require("express").Router();
const { protected, jwtStrategy } = require("../jwt/jwt");

const Comment = require("./comment");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Comment.findById(id).populate('comment')
    .then(response => {
      res.status(202).json(response);
    })
    .catch(err => {
      res.status(500).json;
    });
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const options = {
    new: true
  };
  Comment.findByIdAndUpdate(id, update, options)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
router.get("/",protected, (req, res) => {
  Comment.find().populate("comment")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
