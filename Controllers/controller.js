const express = require('express');
const eier = require('../Models/eier');
const { receiveMessageOnPort } = require('worker_threads');
const { userInfo } = require('os');
const reinsdyr = require('../Models/reinsdyr');


const authController = {
    loggedIn: false,
    currentEier: eier,

    renderUser: (req, res) => {
        res.render('user');
    },

    renderRegister: (req, res) => {
        res.render('register');
    },

    register: async (req, res) => {

        try {
            if (req.body.passord === req.body.gjentaPassord
                && !eier.findOne({epost: req.body.epost})
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
                this.currentEier = nyEier
                console.log('Eier registrert:', nyEier);
                loggedIn = true;
                res.render('index')
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
        const existingEier = eier.findOne({epost: req.body.epost});
            console.log('authenticating...')

            try {
            if (req.body.passord === existingEier.passord &&
                req.body.epost === existingEier.epost &&
                req.body.navn === existingEier.navn
            ){
            loggedIn = true;
            this.currentEier = existingEier
            console.log(existingEier);
            res.render('index')
            }
            else {
                res.status(201).send("couldn't find account");
            }
        }

            catch (error) {
                console.log(error)
            }
        },

        renderReinRegister: (req, res) => {
            res.render('reinRegister');
        },

        reinRegister: async (req, res) => {

            try {
                if (!reinsdyr.findOne({serienummer: req.body.serienummer})
                ){
                    console.log('ditt passord er ikke cringe');
    
                    const nyRein = new reinsdyr({
                        navn: req.body.navn,
                        serienummer: req.body.serienummer,
                        flokk: req.body.flokk,
                        fødselsdato: req.body.fødselsdato,
                    });
        
                    await nyRein.save();
                    console.log('Reinsdyr Registrert registrert:', nyRein);
                    res.render('index')
                    }
                else {
                    res.status(201).send('Reindeer already exists');
                }
            }
            
            catch (error) {
                    console.log(error);
                }
        }
    };

module.exports = authController;