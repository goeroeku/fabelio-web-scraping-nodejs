exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      const uuid = require("uuid");

      // Inserts seed entries
      return knex("products").insert([
        {
          id: uuid.v4(),
          link: "-",
          name: "Ipsum amet",
          description:
            "Aliqua quis do veniam ad deserunt dolor velit reprehenderit qui anim.",
          images: "{}",
          price: 0
        },
        {
          id: uuid.v4(),
          link: "-",
          name: "Laborum dolor",
          description:
            "Amet cupidatat laborum irure cillum ut adipisicing irure reprehenderit eu.",
          images: "{}",
          price: 2
        },
        {
          id: uuid.v4(),
          link: "-",
          name: "Ea et sunt",
          description: "Sint ipsum pariatur et nisi qui voluptate ex ex ex.",
          images: "{}",
          price: 0
        }
      ]);
    });
};
