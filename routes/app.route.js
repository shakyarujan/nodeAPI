const express = require('express');
const router = express.Router();

module.exports = router;

const homeControllers = require('../controllers/home.controller');

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfull connection to the api"
    });
});

router.get('/blogs', homeControllers.getBlog);
router.get('/blogs/:id', homeControllers.getBlogById);
router.post('/blogs', homeControllers.addBlog);
router.put('/blogs/:id', homeControllers.updateBlog);
router.delete('/blogs/:id', homeControllers.deleteBlog);