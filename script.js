const express = require('express');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Welcome to animal sound api!');
});

app.get('dog',(req,res)=>{
    res.send('왈왈왈왈');
});

app.listen(port, ()=>{
    console.log('Local hosting at '+port);
});


