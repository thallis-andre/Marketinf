const express = require("express");
// const request = require('request');

const routes = express.Router();

const influencersController = require("./controllers/influencersControllers");
const companiesController = require("./controllers/companiesControllers");

const user_name = "thallis-andre";

const CompanieController = require("./controllers/companiesControllers"); // tem que usar o metodo para poder utilizar

// codigo do thallis routes.post("/influencer/novo", influencersController.create);
routes.post("/cadastrar/inf", influencersController.create);
routes.post("/cadastrar/loja", CompanieController.create);
routes.get("/", influencersController.read); //add a rota
routes.get("/", influencersController.read); //add a rota
// https://www.instagram.com/thallis.andre/?__a=1

routes.get(
  `https://www.instagram.com/${user_name}/?__a=1`,
  (request, response) => {
    return response.json();
  }
);

module.exports = routes;
