// const Admin = require('../models/Admin');

// // Add other required imports and middleware (e.g., bcrypt, jwt)
// // Controller functions for admin operations
// exports.createAdmin = async (req, res) => {
//   // Implementation for creating an admin
// };
// exports.getAdmins = async (req, res) => {
//   try {
//     const admins = await Admin.find();
//     res.json(admins);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching admins', error });
//   }
// };

// // Add other admin-related controller functions
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin');

// // Controller functions for admin operations

// // Function to create a new admin
// exports.createAdmin = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Admin already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newAdmin = new Admin({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newAdmin.save();

//     res.status(201).json({ message: 'Admin created successfully' });
//   } catch (error) {
//     console.error('Error creating admin:', error);
//     res.status(500).json({ message: 'Error creating admin' });
//   }
// };

// // Function to fetch all admins
// exports.getAdmins = async (req, res) => {
//   try {
//     const admins = await Admin.find();
//     res.json(admins);
//   } catch (error) {
//     console.error('Error fetching admins:', error);
//     res.status(500).json({ message: 'Error fetching admins' });
//   }
// };

// // Function to authenticate admin login
// exports.loginAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });
//     if (!admin) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email } });
//   } catch (error) {
//     console.error('Error during admin login:', error);
//     res.status(500).json({ message: 'Error logging in' });
//   }
// };

// // Other admin-related controller functions can be added here
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const Admin = require('../models/Admin');

// Function to create a new admin
exports.createAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ message: 'Error creating admin' });
  }
};

// Function to fetch all admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ message: 'Error fetching admins' });
  }
};

// Function to update admin status
exports.updateAdminStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const admin = await Admin.findByIdAndUpdate(id, { status }, { new: true });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.json(admin);
  } catch (error) {
    console.error('Error updating admin status:', error);
    res.status(500).json({ message: 'Error updating admin status' });
  }
};

// Function to authenticate admin login
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, jwtSecret, { expiresIn: '1h' });

    res.json({ token, admin });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'Error logging in admin' });
  }
};
