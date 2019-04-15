const router = require('express').Router();

const controller = require('./controller.js');

router
  .route('/reservation/id/:restaurantID')
  .get(controller.reservation);

router
  .route('/restaurant/:restaurantId')
  .get(controller.get);

router
  .route('/restaurants/:_id')
  .get(controller.reviews);

router
  .route('/navbar')
  .get(controller.navbar);

router
  .route('/navbar/:restaurantId')
  .get(controller.navbarid);

module.exports = router;
