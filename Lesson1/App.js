const express = require ('express');
const app = express();


//use methods via http

app.get("/",(req,res)=>{
    res.send("I am a get request from Home Route");
})
app.post("/",(req,res)=>{
    res.send("I am a post request at Route");
})
app.put("/",(req,res)=>{
    res.send("I am a put request at Route");
})

app.delete("/",(req,res)=>{
    res.send("I am a delete request at Route");
})

module.exports = app;