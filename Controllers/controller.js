const express = require('express');
const eier = require('../Models/eier');
const { receiveMessageOnPort } = require('worker_threads');


const authController = {
    loggedIn: false,


    authorize: async (req, res) => {
            const existingEier = eier.findOne({epost: req.body.epost});
            console.log('authenticating...')

            try {
            if (existingEier)
                {
            loggedIn = true;
            console.log('user authorized');
            console.log(existingEier);

            }
            else {
                console.log("couldn't find account");
            }
        }

            catch (error) {
                console.log(error)
            }
    },

    renderRegister: (req, res) => {
        res.render('register');
    
    },

    register: async (req, res) => {

        try {
            if (req.body.passord === req.body.gjentaPassord
                && eier.findOne({epost: req.body.epost} != req.body.epost)
            ){
                console.log('ditt passord er ikke cringe');

                const nyEier = new eier({
                    navn: req.body.navn,
                    epost: req.body.epost,
                    passord: req.body.passord,
                    kontaktspråk: req.body.kontaktspråk,
                    telefon: req.body.telefon,
                    isAdmin: false
                });
    
                await nyEier.save();
                console.log('Eier registrert:', nyEier);
                
                res.status(201).send('Owner registered');
                }
            else {
                res.status(201).send('User already exists');
            }
        }
        
        catch (error) {
                console.log(error);
            }
    },

    renderLogin: (req, res) => {
        res.render('login');
    },

    login: async (req, res) => {
        const existingEier = eier.findOne({epost} = req.body);
        try {
            console.log('fetching login information');
            authController.authorize()
        }
        
        catch (error) {
            console.log(error);
        }
    }
};

module.exports = authController;