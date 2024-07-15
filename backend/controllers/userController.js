// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error during user registration:', error);
//     res.status(500).json({ message: 'Error registering user' });
//   }
// };

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token and send response
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });

//   } catch (error) {
//     console.error('Error during user login:', error);
//     res.status(500).json({ message: 'Error logging in' });
//   }
// };


// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     console.error('Error during user login:', error);
//     res.status(500).json({ message: 'Error logging in' });
//   }
// };

//module.exports = { registerUser, loginUser };
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const Admin = require('../models/Admin'); // Assuming Admin model is defined similarly to User model

// // User registration controller
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error during user registration:', error);
//     res.status(500).json({ message: 'Error registering user' });
//   }
// };

// // User login controller
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists in either User or Admin collections
//     let user = await User.findOne({ email });
//     let isAdmin = false;

//     if (!user) {
//       // If user not found in User collection, check Admin collection
//       user = await Admin.findOne({ email });
//       isAdmin = true;
//     }

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Send response with token and user details
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, isAdmin } });

//   } catch (error) {
//     console.error('Error during user login:', error);
//     res.status(500).json({ message: 'Error logging in' });
//   }
// };

// module.exports = { registerUser, loginUser };
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const Admin = require('../models/Admin');

// // Register User
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error during user registration:', error);
//     res.status(500).json({ message: 'Error registering user' });
//   }
// };


// // Login User
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists in User collection
//     let user = await User.findOne({ email });

//     if (!user) {
//       // If user not found in User collection, check Admin collection
//       user = await Admin.findOne({ email });
//     }

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id, isAdmin: user instanceof Admin }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, isAdmin: user instanceof Admin } });
//   } catch (error) {
//     console.error('Error during user login:', error);
//     res.status(500).json({ message: 'Error logging in' });
//   }
// };



// module.exports = { registerUser, loginUser };

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const User = require('../models/User');

// @route   POST /api/users/auth/login
// @desc    User Login
// @access  Public
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        role: 'user',
      },
    };

    // Sign the token
    jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: 3600 }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        res.json({ token, user: payload.user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
