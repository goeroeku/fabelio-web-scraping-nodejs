# Fabelio Web Scraping Frontend using NodeJS <img src="https://travis-ci.org/goeroeku/fabelio-web-scraping-nodejs.svg?branch=master" alt="build:started">

This is the BackEnd (API) for scraping konten from Ecomerse Fabelio which is part of the project FrontEnd Version (FE/VueJS) with the address : [@goeroeku](https://github.com/goeroeku/fabelio-web-scraping-vuejs)

## Project setup

```sh
yarn install

```

## Note

1. This project uses port 3000, there are 6 endpoint that can be tried using Postman (or other Client API Tools) :

   a. POST `<url>/products/grab` => to add data by grabbing from the website using URL

   b. GET `<url>/products` => to display all the data that has been added

   c. GET `<url>/products/:uuid` => to display details of data that has been added

   You can open file [Postman Collections](Fabelio_Scraping_Web.postman_collection.json), already included.

2. FrontEnd Address (VueJS version) using => [http://localhost:5000](URL)

### Compiles and hot-reloads for development

```sh

yarn run server

```

### Testing

Before you do the testing process, make sure to run the server and the migration command to initialize the database first

```sh

yarn init

```

or if you have carried out the migration process, it is better if you do the re-migration process

```sh
yarn run reinit
```

then run the testing command

```sh
yarn run test
```
