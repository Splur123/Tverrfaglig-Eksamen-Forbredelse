const express = require('express');
const bcrypt = require('bcryptjs');
const eier = require('../Models/eier');
const reinsdyr = require('../Models/reinsdyr');
const { receiveMessageOnPort } = require('worker_threads');
const { userInfo } = require('os');


const authController = {
    loggedIn: false,

    renderUser: (req, res) => {
        if (this.loggedIn){
            res.render('user');
            }
            else {
                res.status(201).send("You must be logged in to view your profile");
            }
    },

    renderRegister: (req, res) => {
        res.render('register');
    },

    register: async (req, res) => {

        try {
            if (req.body.passord === req.body.gjentaPassord ) {
                const user = await eier.findOne({epost: req.body.epost});

                if(!user){
                    await eier.create({
                        navn: req.body.navn,
                        epost: req.body.epost,
                        passord: req.body.passord,
                        kontaktspråk: req.body.kontaktspråk,
                        telefon: req.body.telefon,
                        isAdmin: false
                    })
                    res.render('index');
                }
                else {
                    res.status(201).send('User already exists');
                }

            } else {
                res.status(201).send('Passwords dont match');
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
        const existingEier = await eier.findOne({epost: req.body.epost});

            console.log('authenticating...');

            try {
            if (bcrypt.compare(req.body.passord, existingEier.passord)){
            res.render('index');
            }
            else {
                res.status(201).send("couldn't find account");
            }
        }

            catch (error) {
                console.log(error);
            }
        },

        renderReinRegister: (req, res) => {
            if (this.loggedIn){
                res.render('reinRegister');
                }
                else {
                    res.status(201).send("You must be logged in to register reindeer");
                }
        },

        reinRegister: async (req, res) => {

            try {
                const rein = await reinsdyr.findOne({serienummer: req.body.serienummer});

                if(!rein){
                    await reinsdyr.create({
                        serienummer: req.body.serienummer,
                        navn: req.body.navn,
                        flokk: req.body.flokk,
                        fødselsdato: req.body.fødselsdato
                    })
                    res.render('index');
                }

                else {
                    res.status(201).send('Reindeer already exists');
                }
            }

            catch (error) {
                    console.log(error);
                }
        },

        flokkRegister: async (req, res) => {
                try {
                    const pack = await flokk.findOne({serienummer: req.body.serienummer});

                    if(!pack){
                        await flokk.create({
                            eier: req.body.serienummer,
                            navn: req.body.navn,
                            flokk: req.body.flokk,
                            fødselsdato: req.body.fødselsdato
                        })
                        res.render('index');
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