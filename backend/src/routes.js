const express = require('express');
// const request = require('request');

const routes = express.Router();

const influencersController = require('./controllers/influencersController');

const user_name = 'thallis-andre';




routes.post('/influencer/novo', influencersController.create);

// https://www.instagram.com/thallis.andre/?__a=1



routes.get(`https://www.instagram.com/${user_name}/?__a=1`, (request, response) => {
    return response.json();
});



module.exports = routes;