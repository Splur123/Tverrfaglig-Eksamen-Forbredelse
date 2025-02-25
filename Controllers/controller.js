const express = require('express');


const authController = {
    renderRegister: (req, res) => {
        res.render('register');
    },
    register: (req, res) => {
        
        try {
                
            if (req.body.passord === req.body.gjentaPassord){
                    console.log('ditt passord er ikke cringe');
                }
            else {
                console.log('ditt passord er cringe');
            }
        }
        
        catch (error) {
                console.log('connection timed out');
            }
    }
};

module.exports = authController;
