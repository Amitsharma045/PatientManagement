const gql = require('graphql-tag')

module.exports = gql`
    enum GenderEnum{
        FEMALE
        MALE
        OTHER
    }
    type Patient {
        id: ID!
        createdDate:String,
        createdBy:String,
        modifiedBy:String,
        modifiedDate:String,
        obsoleteFlag:Boolean,
        patientName:String!,
        mobileNumber:String,
        emailAddress:String,
        gender:[GenderEnum]!, 
        dateOfBirth:String!,
        residenceCity:String,
        defaultPatient:Boolean!,
        communicationPreference:String!,
        profilePic:String
    }
    type ProUser{
        id: ID!
        createdDate:String,
        createdBy:String,
        modifiedBy:String,
        modifiedDate:String,
        obsoleteFlag:Boolean,
        name:String!,
        mobile:String,
        email:String,
        gender:[GenderEnum]!,
        startDate:String!,
        userRole:UserRole!,
        shortDescript:String!,
        defaultAppointmentTime:String!
    }
    type UserRole{
        id: ID!
        createdDate:String,
        createdBy:String,
        modifiedBy:String,
        modifiedDate:String,
        obsoleteFlag:Boolean,
        roleName:String!,
        roleCapability:[Capability]
    }
    type Capability{
        capabilityName:String!,
        capabilityDesc:String!
    }
    input RegisterProUserInput{
        name: String!
        mobile: String!
        email:String
        gender:[GenderEnum]!
        startDate:String,
        userRole:String!,
        shortDescript:String!,
        defaultAppointmentTime:String!
    }
    input RegisterPatientInput{
        patientName:String!,
        mobileNumber:String,
        emailAddress:String,
        gender:[GenderEnum],
        dateOfBirth:String,
        residenceCity:String,
        defaultPatient:Boolean,
        communicationPreference:String,
        profilePic:String
    }
    type Query{
        getPatients: [Patient]!
        getPatient(patientId:ID!) : Patient!
        getUsers:ProUser!
        getUser(proUserId:ID!):ProUser
    }
    type Mutation{
        loginProUser(userName: String!, password: String!): ProUser!
        loginPatient(userName: String!, password: String!): Patient!
        registerProUser(registerInput: RegisterProUserInput!): ProUser!
        registerPatient(registerInput: RegisterPatientInput):Patient!
    }
`