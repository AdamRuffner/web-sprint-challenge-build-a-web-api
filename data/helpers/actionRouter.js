const express = require("express");
const Actions = require("./actionModel");
const router = express.Router();

router.get("/", (req, res) => {
  Actions.get()
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      res.status(500).json({ message: "try again" });
    });
});

router.get("/:id", (req, res) => {
    Actions.get(req.params.id)
      .then((action) => {
        res.status(200).json(action);
      })
      .catch((err) => {
        res.status(500).json({ message: "try again" });
      });
  });

router.post("/", (req, res) => {
    Actions.insert(req.body)
    .then(data => {
        res.status(201).json({ message: 'you did it' })
    })
    .catch(err => {
        res.status(500).json({ message: "could not be posted" })
    })
});

router.put("/:id", (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(data => {
        res.status(200).json({ message: 'you updated it' })
    })
    .catch(err => {
        res.status(500).json({ message: 'did not update' })
    })
});

router.delete("/:id", (req, res) => {
    Actions.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: 'message was deleted successfully' })
    })
    .catch(err => {
        res.status(500).json({ message: 'could not delete' })
    })
});

module.exports = router;
