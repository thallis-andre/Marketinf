const connection = require("../database/connection");
import influencers from "../models/influencers";
module.exports = {
  async create(request, response, next) {
    try {
      const { name, email, password, ig_name, city } = request.body;
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
      await connection("influencers").insert({
        name,
        email,
        password,
        ig_name,
        city,
        following,
        follower,
      });

      const exists = await influencers.findOne({
        where: { email: request.body.email },
      });
      if (exists) {
        throw error;
      }

      return response.json({
        mensagem: "Usuário cadastrado com sucesso",
      });
    } catch (error) {
      next(error);
      console.log("erro ao criar usuario");
    }
  },

  async read(request, response) {
    const results = await knex("influencers");
    return response.json(results);
  },
};
