const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')

const ENV = require('dotenv').config()
const typeDefs = require('./graphql/typeDef')
const resolvers = require('./graphql/resolvers')



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) =>({req})
})

mongoose.connect(process.env.DB_HOST_PREFIX+process.env.DB_USER+':'+process.env.DB_PASSWORD
                    +'@'+process.env.DB_HOST+"/"+process.env.COLLECTION_NAME+process.env.DB_HOST_SUFFIX,
                    { useNewUrlParser: true, useUnifiedTopology: true }).
                    then(()=>{
                        console.log("DB connected")
                        server.listen({port: process.env.PORT}).then(res =>{
                            console.log(`Server running at ${res.url}`)
                        })
                    })