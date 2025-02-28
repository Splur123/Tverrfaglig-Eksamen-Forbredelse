const express = require('express');
const eier = require('../Models/eier');
const { receiveMessageOnPort } = require('worker_threads');


const authController = {
    loggedIn: false,


    // authorize: async (req, res) => {
    //         const existingEier = eier.findOne({req.body.epost});
    //         console.log('authenticating...')

    //         try {
    //         if (existingEier)
    //             {
    //         loggedIn = true;
    //         console.log('user authorized');
    //         console.log(existingEier);

    //         }
    //         else {
    //             console.log("couldn't find account");
    //         }
    //     }

    //         catch (error) {
    //             console.log(error)
    //         }
    // },

    renderRegister: (req, res) => {
        res.render('register');
    
    },

    register: async (req, res) => {

        try {
            if (req.body.passord === req.body.gjentaPassord
                && req.body.epost != eier.findOne({epost})
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
                console.log('ditt passord er cringe');
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
        }
        
        catch (error) {
            console.log(error);
        }
    }
};

module.exports = authController;