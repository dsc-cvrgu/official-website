const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name:{
        type:String ,
        required: true
    },
    description:{
        type : String ,
        required: true 
    },
    poster:{
        type : String ,
        required: true
    },
    hostedBy:{
        type:String ,
        required: true
    },
    location :{
        type :String ,
        required: true
    },
    date:{
        type: Date ,
        required: true
    },
    eventLink:{
        type:String ,
        default:"my event link"
    },
  


})

mongoose.model("Event" , eventSchema) ;