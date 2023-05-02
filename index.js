const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const allDt = require("./data2.json");

app.get('/allData', (req,res)=>{
    res.send(allDt);
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})