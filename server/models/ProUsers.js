const {model, Schema} = require('mongoose')
const baseSchema = require('./BaseSchema')

const proUserSchema = new Schema({
    ...baseSchema,
    name:String,
    mobile:String,
    email:String,
    gender:String,
    startDate:String,
    userRole:{
        type:Schema.Types.ObjectId,
        ref:'UserRoles'
    },
    shortDescript:String,
    defaultAppointmentTime:Number
})

module.exports = model('ProUsers', proUserSchema)