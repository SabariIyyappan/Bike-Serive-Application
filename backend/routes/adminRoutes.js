// const express = require('express');
// const router = express.Router();
// const Admin = require('../models/Admin');
// router.post('/', async (req, res) => {
//   try {
//     const admin = new Admin(req.body);
//     await admin.save();
//     res.status(201).send(admin);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });
// router.get('/', async (req, res) => {
//   try {
//     const admins = await Admin.find();
//     res.send(admins);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });
// router.put('/:id', async (req, res) => {
//   try {
//     const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!admin) {
//       return res.status(404).send();
//     }
//     res.send(admin);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });
// router.delete('/:id', async (req, res) => {
//   try {
//     const admin = await Admin.findByIdAndDelete(req.params.id);
//     if (!admin) {
//       return res.status(404).send();
//     }
//     res.send(admin);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });
// module.exports = router;
const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// GET all admins
router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ message: 'Error fetching admins' });
  }
});

// PUT update admin status
router.put('/:id/status', async (req, res) => {
  const { status } = req.body;

  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(admin);
  } catch (error) {
    console.error('Error updating admin status:', error);
    res.status(500).json({ message: 'Error updating admin status' });
  }
});

module.exports = router;
