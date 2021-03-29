const {model, Schema} = require('mongoose')

const patientSchema = new Schema({
    createdDate:String,
    createdBy:String,
    modifiedBy:String,
    modifiedDate:String,
    obsoleteFlag:Boolean,
    patientName:String,
    mobileNumber:String,
    emailAddress:String,
    gender:String,
    dateOfBirth:String,
    residenceCity:String,
    defaultPatient:{
        type:Boolean,
        default:true
    },
    communicationPreference:String,
    profilePic:String
})

module.exports = model('Patients', patientSchema)