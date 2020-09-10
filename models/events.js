const mongoose  = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const eventsSchema  = new mongoose.Schema({
    upcomingEvents:[{type:ObjectId ,ref :"Event"}] ,
    pastEvents:[{type: ObjectId , ref: "Event"}]
})



mongoose.model("Events" , eventsSchema) ;