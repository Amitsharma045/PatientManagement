const {Schema} = require('mongoose')

module.exports = function baseSchema(Schema) {

    // Add the two fields to the schema
    Schema.add({ 
        createdDate:Date,
        createdBy:String,
        modifiedBy:String,
        modifiedDate:Date,
        obsoleteFlag:Boolean
    })
  
    // Create a pre-save hook
    Schema.pre('save', function (next) {
      let now = Date.now()
      //TODO: handle createdBy and modified BY here
     
      this.modifiedDate = now
      // Set a value for createdAt only if it is null
      if (!this.createdDate) {
        this.createdDate = now
      }

      if (!this.obsoleteFlag) {
        this.createdDate = false
      }
     // Call the next function in the pre-save chain
     next()    
    })
  }
  