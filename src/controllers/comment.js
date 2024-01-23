const prisma = require("../utils/prisma");

exports.createComment = async (req, res, next) => {
  try {
    const data = req.body;
    const comment = await prisma.comment.create({
      data,
    });
    res.status(201).json({
      comment,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllComments = async (req, res, next) => {
  try {
    const comments = await prisma.comment.findMany({});
    res.status(200).json({
      comments,
    });
  } catch (error) {
    next(error);
  }
};
