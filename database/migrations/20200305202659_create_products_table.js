exports.up = function(knex) {
  return knex.schema.createTable("products", function(table) {
    table.uuid("id").primary();
    table.text("link").notNullable();
    table.string("name").notNullable();
    table.string("price").notNullable();
    table.text("description").notNullable();
    table.jsonb("images").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("products");
};
