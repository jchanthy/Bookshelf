import User from '../../models/user.js';
const signUpUser = async (req, res) => {
const { name, email, password } = req.body;
console.log(name);
  try {
    

    // Check if the user already exists with the provided email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

  //   // Hash the user's password and security answer
  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   // Create a new user
    const user = new User({
      name,
      email,
      password,
    });

  //   // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default signUpUser;