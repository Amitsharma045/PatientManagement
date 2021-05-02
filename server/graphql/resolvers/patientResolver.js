const service = require('../Service/PatientService');

module.exports.getPatients = async (parent_, args, context) => {
  return service.getPatients(context);
};

module.exports = {
  Mutation: {
    async registerPatient(_, args, context) {
      return await service.registerPatient(_,args.registerInput,context)
    },
  },
};
