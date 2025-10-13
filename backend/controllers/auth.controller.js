import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const {name, username, email, password} = req.body

        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingEmail = await User.findOne({email})
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const existingUsername = await User.findOne({username})
        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name,
            username,
            email,
            password: hashedPassword
        })

        await user.save()

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" })

        res.cookie("jwt-linkedin", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({ message: "User created successfully" })

        //todo: send welcome email
    } catch (error) {
        console.log("Error in signup controller: ", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const login = (req, res) => {
    res.json({ message: "Login" })
}

export const logout = (req, res) => {
    res.json({ message: "Logout" })
}
