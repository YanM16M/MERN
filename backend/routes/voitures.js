const express = require('express');

const router = express.Router();

// On importe le modèle
const Voiture = require('../models/Voiture.js');

// On récupère toutes les voitures
router.get('/', (req, res) => {
    Voiture.find()
        .then(voitures => res.json(voitures))
        .catch(err => res.statut(404).json({noCarsFound: 'No cars founds'}));
})

router.get('/:id', (req, res) => {
    Voiture.findById(req.params.id)
        .then(voiture => res.json(voiture))
        .catch(err => res.status(404).json({NoCarFound: 'No car found with the id ' + req.params.id}))
})

// On ajoute une voiture
router.post('/ajout', (req, res) => {
    console.log('test')
    Voiture.create(req.body)
      .then(voiture => res.json({ message: 'Car added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this car' }));
});

// UPDATE
router.put('/:id', (req, res) => {
    Voiture.findByIdAndUpdate(req.params.id, req.body)
      .then(voiture => res.json({ message: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// DELETE
router.delete('/supprime/:id', (req, res) => {
    Voiture.findByIdAndRemove(req.params.id, req.body)
      .then(voiture => res.json({ message: 'Car entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a car' }));
});

router.delete('/supprime/all', (req, res) => {
    Voiture.deleteMany({})
    .then(() => res.json({message: "all collection voitures deleted"}))
    .catch(err => res.status(404).json({message: 'nothing done'}))
})
  
module.exports = router;