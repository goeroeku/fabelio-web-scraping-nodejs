const isUuid = require("is-uuid").v4;
const { isString, map, filter, merge } = require("lodash");

const { table } = require("app/orm");

function getAll() {
  return table("products").all();
}

function getById(uuid) {
  return isUuid(uuid) ? table("products").find(uuid) : null;
}

function create(data = {}) {
  return table("products")
    .insert(data)
    .then(product => {
      return product;
    });
}

function update(product, data) {
  return table("products").update(product.id, data);
}

function remove(product) {
  return table("products").delete({ id: product.id });
}

async function grab(url) {
  const axios = require("axios");
  const cheerio = require("cheerio");

  // console.log(url);

  let name, price, description, resImage;

  let newProduct = await axios
    .get(url)
    .then(async res => {
      let resultHtml = res.data;
      let $ = cheerio.load(resultHtml);

      $("h1.page-title").filter(function() {
        const data = $(this);
        name = data.text().trim();
      });

      $(
        "div.product-info-main [data-price-type='finalPrice'] span.price"
      ).filter(function() {
        const data = $(this);
        price = data.text().trim();
      });

      $("#description p").filter(function() {
        const data = $(this);
        description = data.text().trim();
      });

      const regex = /"data":.+?]/g;

      let matches = regex.exec(resultHtml);
      let output = "{" + matches + "}";
      resImage = JSON.parse(output);

      const data = {
        link: url,
        name,
        price,
        description,
        images: resImage
      };

      newProduct = await table("products")
        .insert(data)
        .then(product => {
          return product;
        });

      return newProduct;
    })
    .catch(function(e) {
      console.log(e);
    });

  if (newProduct != null) return await newProduct;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  grab
};
