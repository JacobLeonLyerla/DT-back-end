const router = require("express").Router();

const { protected, jwtStrategy } = require("../jwt/jwt");

const Tag = require("./tag");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tag.findById(id)
    .populate("comments")
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

  Tag.findByIdAndUpdate(id, update, options)
    .then(response => {
      res.status(200).json(response);
    })

    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.get("/", protected, (req, res) => {
  Tag.find()

    .sort("name")

    .populate("comments")

    .then(response => {
      res.status(200).json(response);
    })

    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res) => {
  const tag = new Tag(req.body);

  tag
    .save()
    .then(response => {
      res.status(201).json(response);
    })

    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
