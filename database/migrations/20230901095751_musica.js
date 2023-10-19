/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('musica', (table) =>{
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('artista');
    table.string('duracion');
    table.string('genero');
    });
}

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
export function down(knex) {
    return knex.schema.dropTable('musica');
}