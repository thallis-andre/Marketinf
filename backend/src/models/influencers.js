import knex, { Model } from "knex";

class influencers extends Model {
  static init(knex) {
    super.init(
      {
        name: knex.STRING,
        email: knex.STRING,
        password: knex.STRING,
        ig_name: knex.STRING,
        city: knex.STRING,
      },
      {
        tableName: "influencers",
        knex,
      }
    );
  }
}
