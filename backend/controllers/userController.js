import jwt from 'jsonwebtoken'; // Import JWT library
import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password  } = req.body;

    // Check if the user already exists with the provided email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash the user's password and security answer
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const { password, ...body } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUserData = { ...body, password: hashedPassword };

    // Find the user by ID and update their information
    const updatedUser = await User.findByIdAndUpdate(_id, updatedUserData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: body });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user's balance as the response
    res.status(200).json({ balance: user.balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllUsers = async (req, res) => {
  console.log(req.body);
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

