const {AuthenticationError} = require('apollo-server')

const Patients = require('../../models/Patients')
const checkAuth = require('../../Util/AuthUtil')
