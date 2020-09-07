const mongoose  =  require('mongoose')

const projectSchema = new  mongoose.Schema({
    title :{
        type:String ,
        required: true
    },
    description :{
        type :String ,
        required : true
    },
    poster:{
        type: String ,
        default:"prject photo"
    },
    projectLink:{
        type :String ,
        default : "project link"
    }
    
    
}) 


mongoose.model("Project" , projectSchema) ;