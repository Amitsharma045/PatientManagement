const {model, Schema} = require('mongoose')

const userRoleSchema = new Schema({
    createdDate:String,
    createdBy:String,
    modifiedBy:String,
    modifiedDate:String,
    obsoleteFlag:Boolean,
    roleName:String,
    roleCapability:[
        {
            capabilityName:String,
            capabilityDesc:String
        }
    ]
})

module.exports = model('UserRoles', userRoleSchema)