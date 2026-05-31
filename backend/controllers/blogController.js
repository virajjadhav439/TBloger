const Blog = require('../models/Blog');

const createBlog = async (req,res)=>{
    try {
        const {title,content} = req.body
    //New Blog
    const blog = await Blog.create({
        title,content,author:req.user.userId
    })
    //Blog Created Succuflyy
    return res.status(201).json({
        message:"Blog Created Successfully",
        blog:{
            _id:blog.id,
            title:blog.title,
            author:blog.author,
        }
    })
    
    } catch (error) {
        // Blog Creation Failed
        return res.status(500).json({
            message:'Blog Creation Failed',error:error.message
        })
    }
    
}
const getBlogs = async (req,res)=>{
    try {
        //Fetch The blogs and remove content
        const blogs = await Blog.find().select('-content')
        return res.status(200).json(blogs)
    } catch (error) {
        return res.status(500).json({
            message:"Fetching All Blog  Failed",error:error.message
        })
    }
}
const getBlogsById = async (req,res)=>{
    try {
        //Fetch the Blog By Id
    const blog = await Blog.findById(req.params.id)
    return res.status(200).json(blog)
    } catch (error) {
        return res.status(500).json({
            message:"Blog Not Found"
        })
    }
    
}
const deleteBlogs = async (req,res)=>{

}

module.exports  = {
    createBlog,
    getBlogs,
    getBlogsById,
    deleteBlogs,
}