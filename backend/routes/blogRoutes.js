const express = require('express');
const protect = require('../middlewares/authMiddleware');
const { createBlog, getBlogs, getBlogsById, deleteBlogs, updateBlog, getMyBlogs } = require('../controllers/blogController');
const router = express.Router()

//Creation
router.post('/create',protect,createBlog)

//Viewing
router.get('/',getBlogs)
router.get('/myblogs',protect,getMyBlogs)
router.get('/:id',getBlogsById)

//Updatation 
router.put('/:id',protect,updateBlog)

//Deletion
router.delete('/:id',protect,deleteBlogs)




module.exports = router

