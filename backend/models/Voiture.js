
const mongoose = require('mongoose');

const VoitureSchema = new mongoose.Schema({
  matricule: {
    type: String,
    required: true
  },
  modele: {
    type: String,
    required: true
  },
  marque: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  date_achat: {
    type: Date,
    required: true
  }
});

module.exports = Voitures = mongoose.model('voiture', VoitureSchema);
