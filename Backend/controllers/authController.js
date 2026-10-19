const jwt = require("jsonwebtoken");
const User = require("../models/User");



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};

exports.registerUser = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body || {};

    if (!fullName || !email || !password) {
        return res.status(400).json({
            message: "Please provide all required fields"
        });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl
        });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id)
        });

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
};


exports.loginUser = async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({
            message: "Please provide both email and password"
        });
    }

    try {
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        res.status(200).json({
            id: user._id,
            user,
            token: generateToken(user._id)
        });

    } catch (error) {
        console.error("Error logging in user:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


exports.getUserInfo = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: "Not authorized"
            });
        }

        return res.status(200).json(req.user);

    } catch (error) {
        console.error("Error fetching user info:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};        



