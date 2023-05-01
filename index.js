const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.json({message:"hellow running"});
});

app.listen(5000,()=>{
    console.log("server is running");
})