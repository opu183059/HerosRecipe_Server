const express = require('express');
const app = express();
const allDt = require("./data2.json");
app.get('/allData', (req,res)=>{
    res.send(allDt);
});

app.listen(5000,()=>{
    console.log("server is running");
})