const patientResolver = require('./patientResolver')
const proUserResolver = require('./proUserResolver')

module.exports = {
    Query:{
        ...patientResolver.Query
    },
    Mutation:{
        
        ...patientResolver.Mutation,
    }
}