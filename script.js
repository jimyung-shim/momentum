const express = require('express');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Welcome to animal sound api!');
});

app.listen(port, ()=>{
    console.log('Local hosting at '+port);
});


