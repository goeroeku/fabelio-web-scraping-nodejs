const Tabel = require("tabel");
const { config } = require("../../database/config");
const knex = { db: config };

const loadTables = require("./tables");

const orm = new Tabel(knex);

loadTables(orm);

module.exports = orm.exports;
