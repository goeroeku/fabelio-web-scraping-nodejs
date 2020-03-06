export default function loadTables(orm) {
  orm.defineTable({
    name: "products",

    props: {
      autoId: true,
      timestamps: true
    }
  });
}
