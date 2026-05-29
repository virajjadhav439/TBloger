const User = require('../models/User')

const signupUser = async (req,res)=>{

    console.log("BODY:", req.body)

    try{
        const {name,email,password} = req.body

        const user = await User.create({
            name,
            email,
            password
        })

        res.status(201).json({
            message: "User Created Successfully",
            user
        })

    } catch (error) {

        res.status(500).json({
            message: "Signup Failed",
            error: error.message
        })
    }
}

module.exports = {
    signupUser
}