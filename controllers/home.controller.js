const blogController = require('../models').Blog;

module.exports = {
    getBlog,
    getBlogById,
    addBlog,
    deleteBlog,
    updateBlog
}


async function getBlog(req, res) {
    await blogController.findAll().then(data => {
        console.log('controller >>>>', data);
        res.status(200).json({
            success: true,
            data: data
        })
    }).catch(e => {
        res.status(500).json({
            success: false,
            message: 'fatal error'
        });
    });
}

async function getBlogById(req, res) {
    const id = req.params.id;

    await blogController.findByPk(id).then((data) => {
        res.status(200).json({
            success: true,
            data: data
        })
    }).catch((e) => {
        res.status(500).json({
            sucess: false,
            message: 'fatal error'
        });
    });
}

async function addBlog(req, res) {
    const blog = {
        title: req.body.title,
        content: req.body.content
    }

    await blogController.create(blog).then((data) => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).json({
            sucess: false,
            message: 'fatal error'
        });
    });
}

async function updateBlog(req, res) {
    const id = req.params.id;
    console.log(id);

    await blogController.update(req.body, {
        where: {
            id: id
        }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Blog was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Blog with id=${id}. Maybe Blog  was not found or req.body is empty!`
            });
        }
    }).catch((err) => {
        res.status(500).json({
            successs: false,
            message: 'fatal error'
        });
    });
}



async function deleteBlog(req, res) {
    const id = req.params.id;

    await blogController.destroy({
        where: {
            id: id
        }
    }).then((data) => {
        const id = req.params.id;
        res.status(200).json({
            success: true,
            message: 'successfully deleted!'
        })
    }).catch((e) => {
        res.status(500).json({
            sucess: false,
            message: 'fatal error, cannot deleted the blog!!!'
        });
    });
}