import { signinUser } from "../../controllers/user.js";

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await signinUser({ email, password });
    res.json({ user, token });
  } catch (error) {
    res.status(403).json(error);
  }
};