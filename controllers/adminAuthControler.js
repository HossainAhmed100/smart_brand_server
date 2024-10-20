// Import necessary modules and models
const Admin = require('../models/AdminAuth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new user
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    console.log("🚀 ~ exports.register= ~  name, email, password, role:",  name, email, password, role)
  
    try {
      // Check if user already exists
      let user = await Admin.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

       // Hash the password before saving
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      user = new Admin({
        name,
        email,
        password: hashedPassword,
        role: 'admin',
      });
  
      await user.save();
  
      // Generate JWT token
      const payload = { email: user?.email, role: role };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '365d' });
  
      res.status(201).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };

// User login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await Admin.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const payload = { email: user.email, role: user.role};
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '365d' });

        // Send response
        res.json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
