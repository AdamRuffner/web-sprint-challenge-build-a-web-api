const express = require("express");
const Projects = require("./projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      res.status(500).json({ message: "try again" });
    });
});

router.get("/:id", (req, res) => {
  Projects.get(req.params.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      res.status(500).json({ message: "try again" });
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((data) => {
      if (id) {
        res.status(201).json({ message: "You did it" });
      } else {
        res
          .status(404)
          .json({ message: "the project with that id cannot be found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.put("/:id", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then((data) => {
      res.status(201).json({ message: "updated successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "could not update projects" });
    });
});

router.get("/:id/actions", (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "you got the actions" });
    })
    .catch((err) => {
      res.status(500).json({ message: "you did NOT get the actions" });
    });
});

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "project was deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "could not delete project" });
    });
});

module.exports = router;
