const express = require ('express');
const app = express();
const userRouter = require ("./routes/usersRoute.js")

//use methods via http


app.use("/api/user",userRouter);

app.use("/",(req,res)=>{
    res.send("I am a get request from Home Route");
    res.end();
});

app.use((req,res)=>{
    res.send("404 !!! Not a valid URL");
})
 

module.exports = app;