import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      number,
      password,
      picturePath,
      houseNo,
      location,
      occupation,
    } = req.body;

    if (!firstName || !lastName || !email || !number || !password) {
      return res.status(400).json({ msg: "Please provide all required fields." });
    }

    // Validate the format of the "Number" field (modify the regex as needed)
    //const numberRegex = /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/;
   // if (!numberRegex.test(number)) {
   //   return res.status(400).json({ msg: "Number field is not in a valid phone number format." });
   // }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      number,
      password: passwordHash,
      picturePath,
      houseNo,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
