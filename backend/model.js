const mongoose = require("mongoose")

const BookingSchema = mongoose.Schema({
    from :{
       type:String,
       required:true
    },
    to:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    number:{
        type:Number,
    }

})

const AvailableFlights = mongoose.model("Availableflights",BookingSchema);

module.exports = AvailableFlights