const express = require('express');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Welcome to animal sound api!');
});

app.get('/dog',(req,res)=>{
    res.send('왈왈왈멍');
});

app.get('/cat',(req,res)=>{
    res.send('냥냥냥냥냥');
});

app.get('/pig',(req,res)=>{
    res.send('꿀꿀꿀꾸이이이익꿀');
});

app.listen(port, ()=>{
    console.log('Local hosting at '+port);
});


