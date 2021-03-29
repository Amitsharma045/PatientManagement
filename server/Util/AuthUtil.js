const jwt = require('jsonwebtoken')
const {AuthenticationError} = require('apollo-server')
const ENV = require('dotenv').config()

module.exports.generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        userName: user.userName,
        userType: ""
    },process.env.JWT_SECRET_KEY, {expiresIn:'1h'} )
}

module.exports.validateAuthentication = (context)=>{
    const authHeader = context.req.headers.authorization
    if(authHeader){
        const token = authHeader.split('Bearer ')[1]
        if(token){
            try{
                const user =  jwt.verify(token, process.env.JWT_SECRET_KEY)
                return user;
            } catch(err){
                throw new AuthenticationError('Invalid/Expired token')
            }
        }
        throw new Error('Authentication token must be \'Bearer [token]')
    }
    throw new Error('Authentication header must be provided')
}