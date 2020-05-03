const connection = require("../database/connection");
import influencers from "../models/influencers";
module.exports = {
  async create(request, response) {
    const { name, email, password, ig_name, city } = request.body;

    await connection("influencers").insert({
      name,
      email,
      password,
      ig_name,
      city,
    });

    return response.json({
      mensagem: "Usuário cadastrado com sucesso",
    });
  },

  async read(request, response) {
    const influencersRead = await influencers.findOne({});
  },
};
