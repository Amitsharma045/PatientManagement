const {model, Schema} = require('mongoose')
const baseSchema = require('./BaseSchema')

const userRoleSchema = new Schema({
    ...baseSchema,
    roleName:String,
    roleCapability:[
        {
            capabilityName:String,
            capabilityDesc:String
        }
    ]
})

module.exports = model('UserRoles', userRoleSchema)