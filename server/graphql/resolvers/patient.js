const service = require('../Service/PatientService')


module.exports.getPatients =async (parent_,args,context)=>{
    return service.getPatients(context)
}
