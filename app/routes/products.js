const app = (module.exports = require("express")());

const {
  getAll,
  getById,
  create,
  update,
  remove,
  grab
} = require("app/actions").products;

// show all data
app.get("/", (req, res) => {
  getAll().then(result => res.status(200).send({ result }));
});

// show data by id
app.get("/:uuid", (req, res) => {
  getById(req.params.uuid).then(result => {
    if (result) {
      res.status(200).send({ result });
    } else {
      res.status(404).send({ msg: "Product not Found" });
    }
  });
});

// create data
app.post("/", (req, res) => {
  create(req.body)
    .then(result => res.status(201).send({ result }))
    .catch(err => {
      res.status(400).send(err);
    });
});

// update data
app.put("/:uuid", (req, res) => {
  getById(req.params.uuid).then(result => {
    if (result) {
      update(result, req.body)
        .then(() => res.status(204).send({ msg: "Product updated" }))
        .catch(err => {
          res.status(400).send(err);
        });
    } else {
      res.status(404).send({ msg: "Product not Found" });
    }
  });
});

// remove data
app.delete("/:uuid", (req, res) => {
  getById(req.params.uuid).then(result => {
    if (result) {
      remove(result)
        .then(() => res.status(204).send({ msg: "Product deleted" }))
        .catch(err => {
          res.status(400).send(err);
        });
    } else {
      res.status(404).send({ msg: "Product not Found" });
    }
  });
});

// grab data
app.post("/grab", (req, res) => {
  grab(req.body.url)
    .then(result => res.status(201).send({ result }))
    .catch(err => {
      res.status(400).send(err);
    });
});
