const knex = require("../database");
module.exports = {
  async read(request, response) {
    const results = await knex("companies");
    return response.json(results);
  },

  async create(request, response, next) {
    try {
      const { name, email, password, segment, city } = request.body;
      function getinfos() {
        var follower = routes.get(
          `https://www.instagram.com/${user_name}/?__a=1`,
          (request, response) => {
            return response.json().edge_followed_by.count;
          }
        );
        var following = routes.get(
          `https://www.instagram.com/${user_name}/?__a=1`,
          (request, response) => {
            return response.json().edge_follow.count;
          }
        );
      }
      const { follower, following } = getinfos;
      await connection("companies").insert({
        name,
        email,
        password,
        segment,
        city,
        following,
        follower,
      });

      const exists = await companies.findOne({
        where: { email: request.body.email },
      });
      if (exists) {
        throw error;
      }

      return response.json({
        mensagem: "Empresa cadastrado com sucesso",
      });
    } catch (error) {
      next(error);
      console.log("erro ao registrar empresa");
    }
  },

  async readAcessorio(request, response) {
    const results = knex("companies")
      .select("acessorios")
      .then(function (a) {
        return response.json(results);
      });
  },

  async readRoupas(request, response) {
    const results = knex("companies")
      .select("roupas")
      .then(function (a) {
        return response.json(results);
      });
  },

  async readBeleza(request, response) {
    const results = knex("companies")
      .select("beleza")
      .then(function (a) {
        return response.json(results);
      });
  },
};
