const product = require("./products");

export default function loadTables(orm) {
  product(orm);
}
