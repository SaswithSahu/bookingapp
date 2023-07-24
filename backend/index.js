const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const app = express()
const AvailableFlights = require("./model")

app.use(cors());

app.get("/flights",async(req,res) =>{
    const{from,to} = req.query
    try{
        const avaflights = await AvailableFlights.find({from,to})
        res.json(avaflights)
    }
    catch(err){
        console.log(err)
    }
})

mongoose.connect("mongodb+srv://sahusaswith:saswith332@cluster0.kuku0fa.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() =>{
    console.log("dbConnected")
    app.listen(3000,()=>{
        console.log("OK")
    })
})
.catch((e) =>{
    console.log(e)
})




