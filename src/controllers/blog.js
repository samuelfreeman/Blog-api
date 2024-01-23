const prisma = require("../utils/prisma");

exports.createBlog = async (req, res, next) => {
  try {
    const data = req.body;
    const blog = await prisma.blog.create({
      data,
    });
    res.status(201).json({
      blog,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await prisma.blog.findMany({});
    res.status(200).json({
      blogs,
    });
  } catch (error) {
    next(error);
  }
};
