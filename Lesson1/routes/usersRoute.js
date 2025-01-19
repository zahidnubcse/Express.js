const express = require('express');
const router = express.Router();


router.get("/register",(req,res)=>{
    res.send("I am a get request from register Route");
    res.end();
});
router.get("/login",(req,res)=>{
    res.send("I am a get request from login Route");
    res.end();
});

module.exports = router;