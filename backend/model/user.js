
const mongoose = require('mongoose') 
const {ObjectId} = mongoose.Schema.Types


const userSchema = new  mongoose.Schema({

    name :{
        type:String ,
        required :true ,
        maxlength:30
    },

    email:{
        type:String ,
        required: true ,
        maxlength :30 
    },
    
    password:{
        type:String ,
        required: true 
    },
    role:{
        type :Number ,
        default: 0
    },
    enrolledEvents:[{type:ObjectId , ref :"Event"}]
       
   

})

mongoose.model("User" , userSchema) ;