const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");

router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const animal = new Animal({
    animalName: req.body.animalName,
    age: req.body.age,
    species: req.body.species,
    breed: req.body.breed,
    sex: req.body.sex,
    currentLocation: req.body.currentLocation,
    medicalHistory: req.body.medicalHistory,
    description: req.body.description,
  });

  try {
    const savedAnimal = await animal.save();
    res.json(savedAnimal);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:animalId", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.animalId);
    res.json(animal);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:animalId", async (req, res) => {
  try {
    const removedAnimal = await Animal.remove({ _id: req.params.animalId });
    res.json(removedAnimal);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:animalId", async (req, res) => {
  try {
    const updatedAnimal = await Animal.updateOne(
      { _id: req.params.animalId },
      {
        $set: {
          animalName: req.body.animalName,
          age: req.body.age,
          species: req.body.species,
          breed: req.body.breed,
          sex: req.body.sex,
          currentLocation: req.body.currentLocation,
          medicalHistory: req.body.medicalHistory,
          description: req.body.description,
        },
      }
    );
    res.json(updatedAnimal);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
