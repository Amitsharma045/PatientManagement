const { AuthenticationError } = require('apollo-server');
const Patient = require('../../models/Patients');
const checkAuth = require('../../Util/AuthUtil');

module.exports.registerPatient = async (_, args, context) => {
  //const user = checkAuth.validateAuthentication(context)
  //console.log(user.id + " "+ args.body)
  const newPatient = new Patient({
    patientName: args.patientName,
    mobileNumber: args.mobileNumber,
    emailAddress: args.emailAddress,
    gender: args.gender[0],
    dateOfBirth: args.dateOfBirth,
    residenceCity: args.residenceCity,
  });
  await newPatient.save();
  return newPatient
};
