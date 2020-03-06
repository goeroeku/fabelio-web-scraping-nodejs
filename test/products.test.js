const chai = require("chai");
const chaiHttp = require("chai-http");

const { knex } = require("../database/config");

chai.use(chaiHttp);
const expect = chai.expect;

// data
const host = "localhost:3000";

describe("Products Management", () => {
  describe("/Post request for add product", () => {
    it("it should add the product", done => {
      const product = {
        link: "https://fabelio.com/ip/ip/kursi-cessi-upholstered.html",
        name: "Ad eu in duis",
        description:
          "Sunt culpa nostrud esse eiusmod occaecat aliqua aute officia magna sit dolore.",
        images: "[]",
        price: 10
      };
      chai
        .request(host)
        .post("/products")
        .send(product)
        .end((err, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });

  let products = null;
  describe("/Get request for show all product", () => {
    it("it should show all product", done => {
      chai
        .request(host)
        .get("/products")
        .end((err, res) => {
          products = JSON.parse(res.text);
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("/Get request for show product by id", () => {
    it("it should show product by id", done => {
      let product = products.result[0];
      chai
        .request(host)
        .get("/products/" + product.id)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("/Put request for update the product", () => {
    it("it should update the product", done => {
      let product = products.result[0];
      chai
        .request(host)
        .put("/products/" + product.id)
        .send({ price: 128 })
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });

  describe("/Delete request for remove the product", () => {
    it("it should remove the product", done => {
      let product = products.result[0];
      chai
        .request(host)
        .delete("/products/" + product.id)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });

  describe("/Post request for grab data from Fabelio Site", () => {
    it("it should grab data from Fabelio Site", done => {
      let url = "https://fabelio.com/ip/sofa-3-dudukan-rian-brown.html";
      chai
        .request(host)
        .post("/products/grab")
        .send({ url: url })
        .end((err, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });
});
