const mongoose = require('mongoose');

const AnimalSchema = mongoose.Schema({
  animalName: {
    type: String,
    required: true,
  },
  age: {
    type: mongoose.Schema.Types.Mixed,
    default: 0,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  sex: {
    type: mongoose.Schema.Types.Mixed,
  },
  currentLocation: String,
  medicalHistory: [String],
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Animals', AnimalSchema);