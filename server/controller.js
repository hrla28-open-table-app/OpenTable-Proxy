const axios = require('axios');

const controller = {
  navbar: (req, res) => {
    const { restaurantId } = req.params;
    axios.get(`http://localhost:3001/api/navbar`)
      .then(data => res.status(200).send(data.data))
      .catch(err => console.error(err))
  },
  navbarid: (req, res) => {
    const { restaurantId } = req.params;
    axios.get(`http://localhost:3001/api/navbar/${restaurantId}`)
      .then(data => res.status(200).send(data.data))
      .catch(err => console.error(err))
  },
  reservation: (req, res) => {
    axios.get('http://localhost:3002/api/reservation')
      .then(data => res.status(200).send(data.data))
      .catch(err => console.error(err))
      
  },
  get: (req, res) => {
    const { restaurantId } = req.params;
    axios.get(`http://localhost:3003/api/restaurant/${restaurantId}`)
      .then(data => res.status(200).send(data.data))
      .catch(err => console.error(err))
  },
  reviews: (req, res) => {
    const { _id } = req.params;
    axios.get(`http://localhost:3004/api/restaurants/${_id}`)
      .then(data => res.status(200).send(data.data))
      .catch(err => console.err(err))
  },
};

module.exports = controller;
