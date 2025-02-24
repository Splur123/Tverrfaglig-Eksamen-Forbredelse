const express = require('express');

const renderindex = ('/index', (req, res, next)=>{
    res.render('index'); 
});

module.exports={
    renderindex
};
