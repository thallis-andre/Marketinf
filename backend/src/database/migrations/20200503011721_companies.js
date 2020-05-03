exports.up = function (knex) {
  return knex.schema.createTable("companies", function (table) {
    table.increments("id").unique();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable(); //não estamos usando o hash nas nesse momento, contem grande vunerabilidade no sistema
    table.string("segment").notNullable();
    table.string("city").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("companies");
};
