const prisma = require('../utils/prisma')

exports.createUser = async(req,res,next)=>{
try {
    const data = req.body;
    const user = await prisma.users.create({
       data
    })
    res.status(200).json({
        user
    })
} catch (error) {
    next(error)
}
}


