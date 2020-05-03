const connection = require("../database/connection");
import influencers from "../models/influencers";
module.exports = {
  async create(request, response) {
    try {
      const { name, email, password, ig_name, city } = request.body;

      await connection("influencers").insert({
        name,
        email,
        password,
        ig_name,
        city,
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
      console.log("erro ao criar usuario");
    }
  },

  async read(request, response) {
    const results = await knex("influencers");
    return response.json(results);
  },
};
