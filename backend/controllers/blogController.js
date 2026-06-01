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
            message:"Blog Not Found",error:error.message,
        })
    }
    
}
const deleteBlogs = async (req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id)

        if (blog.author.toString() !== req.user.userId) {
            return res.status(403).json({
                message:"Not Authorized"
            })
        }
        if (!blog) {
            return res.status(404).json({
                message:"Blog Not Found",
            })
        }

        await Blog.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message:"Blog Was Deleted Succussfully",
        })
    } catch (error) {
        return res.status(500).json({
            message:"Blog Deletion Failed",error:error.message,
        })
    }
}

const updateBlog = async (req,res)=>{
    try {

        const { title, content } = req.body

        const blog = await Blog.findById(req.params.id)

        if(blog.author.toString() !== req.user.userId){
            return res.status(403).json({
                message:"Not Authorized"
            })
        }

        if (!blog) {
            return res.status(404).json({
                message:"Blog Not Found"
            })
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title,
            content 
        },
            { returnDocument:'after' }
        )

        return res.status(200).json({
            message:"Blog Updated Successfully",
            blog: updatedBlog
        })

    } catch (error) {

        return res.status(500).json({
            message:"Blog Updation Failed",
            error:error.message
        })

    }
}

module.exports  = {
    createBlog,
    getBlogs,
    getBlogsById,
    deleteBlogs,
    updateBlog,
}