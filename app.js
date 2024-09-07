const express = require('express')
const app = express()
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://pravirstudy:l9bCqH0MJzLQOtFl@backenddb.li8va.mongodb.net/PORJECTAPI?retryWrites=true&w=majority&appName=BackEndDB")
.then(() =>{

    console.log('Connected to db');

})
.catch(()=>{
    
    console.log('Connected failed');

})

app.get('/',(req,res) =>{
res.send('Hello from me');
});

module.exports =app;