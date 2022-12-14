var express = require('express');
var router = express.Router();

//Import venues controller
const VenueController = require('../controllers/venues.js')

//Venue router
router.get('/', VenueController.findAll)
router.get('/:id', VenueController.findOneById)
router.post('/', VenueController.create)
router.put('/:id', VenueController.update)
router.delete('/:id', VenueController.delete)

module.exports = router;