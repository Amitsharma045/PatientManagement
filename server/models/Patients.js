const {model, Schema} = require('mongoose')
const validator = require('validator')
const baseSchema = require('./BaseSchema')

const patientSchema = new Schema({
    patientName:String,
    mobileNumber:String,
    emailAddress:{
        type:String,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
        }
    },
    gender:{
        type:String,
        enum:['MALE', 'FEMALE','OTHERS'],
        message:'{VALUE} is not supported!!!'
    },
    dateOfBirth:String,
    residenceCity:String,
    defaultPatient:{
        type:Boolean,
        default:true
    },
    communicationPreference:String,
    profilePic:String
})

patientSchema.plugin(baseSchema)
module.exports = model('Patients', patientSchema)