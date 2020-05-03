exports.up = function (knex) {
  return knex.schema.createTable("influencers", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("ig_name").notNullable();
    table.string("city").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("influencers");
};

// Criar uma migration -> npx knex migrate:make nome_da_migration
// Iniciar uma migration -> npx knex migrate:latest
