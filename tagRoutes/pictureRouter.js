const router = require("express").Router();
const { protected, jwtStrategy } = require("../jwt/jwt");
const Picture = require("./picture");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Picture.findById(id)
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
  Picture.findByIdAndUpdate(id, update, options)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
router.get("/",protected, (req, res) => {
  Picture.find().sort('-priority name' )
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res) => {
  const picture = new Picture(req.body);
  picture
    .save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});
module.exports = router;
