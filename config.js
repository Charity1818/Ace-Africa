const dotenv            = require("dotenv").config()  //read environment variables
// const mongoose          = require("mongoose")
const dbConfiguration = {
    uri : process.env.dbName,  
    options : { 
      useNewUrlParser : true , 
      useCreateIndex : true , //enables mongodb to search for query of index fast
      poolSize : 10 , //enables database you're connecting to to handle con-current requests
      keepAlive : true , 
      useUnifiedTopology : true , 
      keepAliveInitialDelay : 3e6 //how long to wait before request cancels e.g unable to connect
    } 
} 

module.exports = dbConfiguration