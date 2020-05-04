exports.up = function (knex) {
  return knex.schema.createTable("influencers", function (table) {
    table.increments("id").unique();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable(); //não estamos usando o hash nesse momento, contem grande vunerabilidade no sistema
    table.string("ig_name").notNullable();
    table.string("city").notNullable();
    table.integer("follower").notNullable();
    table.integer("following").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("influencers");
};

// Criar uma migration -> npx knex migrate:make nome_da_migration
// Iniciar uma migration -> npx knex migrate:latest
