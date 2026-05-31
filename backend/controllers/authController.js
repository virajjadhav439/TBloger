const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signupUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body

        //existing user 
        const existingUser = await User.findOne({email})

        if (existingUser) {
            return res.status(400).json({
                message:"user Already Exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        //New User
        const user = await User.create({
            name,email,password:hashedPassword
        })

        return res.status(201).json({
            message:"User Created Succufuly",user:{
                _id:user.id,
                name:user.name,
                email:user.email,
            }
        })
        
    } catch (error) {

        return res.status(500).json({
            message:"User Creation Failed",error:error.message
        })
    }
}

const loginUser  = async (req,res)=>{
    try {
        
        //Take Email Pass from user
        const {email,password} = req.body
        //Check if user Exists
        const user = await User.findOne({email})
        //Check if User Exists , doesnt - > 404 - Not found
        if (!user) {
            return res.status(404).json({
                message:"User Not Found"
            })
        }
        //Comparision of Passwords
        const isMatch = await bcrypt.compare(password,user.password)

        //If Password COrrect Go On , doesnt - > 401 - Unauthorized - Password Verification
        if (!isMatch) {
            return res.status(401).json({
                message:"Invalid Password"
            })
            
        }
        //Create JWT token 
        const token = jwt.sign({
            userId:user._id,
        },process.env.JWT_SECRET,{
            expiresIn:'7d'
        })

        //Login was Succueded
        return res.status(200).json({
            message:"Login Succussful",token
        })

    } catch (error) {
        return res.status(500).json({
            message:"Something Went Wrong!",error:error.message
        })
    }
}

const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find().select('-password')
        return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

const getProfile = async (req,res)=>{
    try {
        const user = await User.findById(req.user.userId).select('-password')
        return res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({
            message:"User Not Found By ID",error:error.message
        })
    }
}

module.exports={
    signupUser,
    loginUser,
    getAllUsers,
    getProfile,
}