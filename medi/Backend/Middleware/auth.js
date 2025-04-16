const jwt = require('jsonwebtoken');
const User = require('../Database/models/users');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = async(req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if(!token){
        return res.status(401).json({message: 'Authentication required'});
    }

    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if(!user){
            throw new Error('User not found');
        }

        req.user = user;
        next();
    }catch(error){

        console.error('Error verifying token:', error);
        res.status(403).json({message: 'Invalid token'});

    }
};
module.exports = {authenticate};