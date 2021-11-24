const db = require("./connection");
const { User, Product, Category, Inventory } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Nintendo" },
    { name: "Xbox" },
    { name: "PlayStation" },
    { name: "Atari" },
    { name: "Sega" },
    { gameOrConsole: Boolean },
  ]);

  console.log("categories seeded");

  await Inventory.deleteMany();

  const inventory = await Inventory.insertMany([
    {
      name: "Super Mario Odyssey",
      description: "Got three for my birthday. Don't need three lol.",
      image: "cookie-tin.jpg",
      category: categories[0][true]._id,
      price: 30.0,
      quantity: 2,
    },
    {
      name: "Sega Genesis",
      description: "Found this in my shed. Dusted it off, looks like it works.",
      image: "canned-coffee.jpg",
      category: categories[4][false]._id,
      price: 24.99,
      quantity: 1,
    },
    {
      name: "Xbox",
      category: categories[1][false]._id,
      description: "Old xbox OBO",
      image: "toilet-paper.jpg",
      price: 15.0,
      quantity: 1,
    },
    {
      name: "Super Smash Bros 64",
      category: categories[1][true]._id,
      description: "Found an old Christmas gift my dad hid and forgot about.",
      image: "soap.jpg",
      price: 4.99,
      quantity: 50,
    },
  ]);
  const product = await Product.insertMany([
    {
      name: "Spyro",
      category: categories[2][true]._id,
      description: "Afraid of dragons :(",
      image: "tablet.jpg",
      price: 19.99,
      quantity: 1,
    },
    {
      name: "Atari 7800",
      category: categories[3][false]._id,
      description: "A weird dvd player",
      price: 9.99,
      quantity: 1,
    },
    {
      name: "Dreamcast",
      category: categories[4][false]._id,
      description: "Kids want new stuff not old stuff.",
      image: "spinning-top.jpg",
      price: 50.99,
      quantity: 2,
    },
  ]);

  console.log("inventory seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Travis",
    lastName: "Paul",
    email: "ptgamer@testmail.com",
    password: "password12345",
    orders: [
      {
        inventory: [
          inventory[3][true]._id,
          inventory[0][false]._id,
          inventory[1][true]._id,
        ],
      },
    ],
    rating: 2,
  });

  await User.create({
    firstName: "Andres",
    lastName: "Jung",
    email: "ajnerd@testmail.com",
    password: "password12345",
    orders: [
      {
        product: [
          product[2][false]._id,
          product[2][true]._id,
          product[4][false]._id,
        ],
      },
    ],
    rating: 4,
  });

  console.log("users seeded");

  process.exit();
});
