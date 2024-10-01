exports.up = function (knex) {
  return knex.schema.dropTableIfExists("_users").then(() => {
    return knex.schema.createTable("_users", (table) => {
      table.increments("id").primary();
      table.string("fullName").notNullable(); 
      table.string("company")
      table.string("email")
      table.string("phoneNumber").notNullable().unique();
      table.string("address")
      table.string("website")
      table.string("logo")
    
      table.timestamps(true, true);
    });
  });
};
 
exports.down = function (knex) {
  return knex.schema.dropTable("_users");
};
