const patientResolver = require('./patient')
const proUserResolver = require('./proUser')

module.exports = {
    Query:{
        ...patientResolver.Query
    },
    Mutation:{
        ...proUserResolver.Mutation,
        ...patientResolver.Mutation,
    }
}