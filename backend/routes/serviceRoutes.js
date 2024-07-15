// const express = require('express');
// const router = express.Router();
// const Service = require('../models/Service');

// router.post('/', async (req, res) => {
//   try {
//     const service = new Service(req.body);
//     await service.save();
//     res.status(201).send(service);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const services = await Service.find();
//     res.send(services);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!service) {
//       return res.status(404).send();
//     }
//     res.send(service);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const service = await Service.findByIdAndDelete(req.params.id);
//     if (!service) {
//       return res.status(404).send();
//     }
//     res.send(service);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Service = require('../models/Service'); // Adjust the path to your model

router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error('Failed to fetch services:', error);
    res.status(500).json({ message: 'Failed to fetch services', error });
  }
});

module.exports = router;

