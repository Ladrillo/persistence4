exports.up = function(knex) {
  return knex.schema.createTable("enrollments", table => {
    table.increments();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    table
      .integer("course_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("courses");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("enrollments");
};