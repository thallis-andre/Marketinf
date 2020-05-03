const knex = require("../database");
module.exports = {
  async read(request, response) {
    const results = await knex("companies");
    return response.json(results);
  },

  async create(request, response, next) {
    try {
      const { name, email, password, segment, city } = request.body;

      await connection("companies").insert({
        name,
        email,
        password,
        segment,
        city,
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
};
