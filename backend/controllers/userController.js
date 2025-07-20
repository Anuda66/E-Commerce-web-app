import userModel from "../models/userModel.js"
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user loging--------------------------------------
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: 'Invalid credential' })
        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Route for ser register------------------------------------
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check user existing or not
        const exist = await userModel.findOne({ email })
        if (exist) {
            return res.json({ success: false, message: "User alredy existes" })
        }

        // Validation email format-----------------------------
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Place enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Place enter strong password" })
        }

        // Hashing user password--------------------------------------
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({ success: true, token })

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

// Rute for admin login -------------------------------------
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }