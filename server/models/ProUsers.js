const {model, Schema} = require('mongoose')

const proUserSchema = new Schema({
    createdDate:String,
    createdBy:String,
    modifiedBy:String,
    modifiedDate:String,
    obsoleteFlag:Boolean,
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