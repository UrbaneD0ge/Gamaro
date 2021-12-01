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
    // { gameOrConsole: Boolean },
  ]);

  console.log("categories seeded");

  await Inventory.deleteMany();

  const inventory = await Inventory.insertMany([
    {
      name: "Super Mario Odyssey",
      description: "Got three for my birthday. Don't need three lol.",
      image: "cookie-tin.jpg",
      category: categories[0],
      price: 30.0,
      quantity: 2,
    },
    {
      name: "Sega Genesis",
      description: "Found this in my shed. Dusted it off, looks like it works.",
      image: "canned-coffee.jpg",
      category: categories[4],
      price: 24.99,
      quantity: 1,
    },
    {
      name: "Xbox",
      category: categories[1],
      description: "Old xbox OBO",
      image: "toilet-paper.jpg",
      price: 15.0,
      quantity: 1,
    },
    {
      name: "Super Smash Bros 64",
      category: categories[1],
      description: "Found an old Christmas gift my dad hid and forgot about.",
      image: "soap.jpg",
      price: 4.99,
      quantity: 50,
    },
  ]);
  const product = await Product.insertMany([
    {
      name: "Spyro",
      category: categories[2],
      description: "Afraid of dragons :(",
      image: "tablet.jpg",
      price: 19.99,
      quantity: 1,
      condition: "New",
    },
    {
      name: "Atari 7800",
      category: categories[3],
      description: "A weird dvd player",
      price: 9.99,
      quantity: 1,

      condition: "Fair",
    },
    {
      name: "Dreamcast",
      category: categories[4],
      description: "Kids want new stuff not old stuff.",
      image: "spinning-top.jpg",
      price: 50.99,
      quantity: 2,
      condition: "Fair",
    },
    {
      name: "Super Mario 64",
      category: categories[4],
      description:
        "Classic that is really hard for me to let go, but it's time.",
      image: "spinning-top.jpg",
      price: 65.99,
      quantity: 1,
      condition: "Fair",
    },
    {
      name: "Sonic Adventure",
      category: categories[4],
      description: "Everyone's favorite Blue-haired hedgehog in action",
      image: "spinning-top.jpg",
      price: 50.99,
      quantity: 1,
      condition: "Good",
    },
    {
      name: "Asteroids",
      category: categories[4],
      description: "Even you need a description of this game then dont buy it.",
      image: "spinning-top.jpg",
      price: 50.99,
      quantity: 1,
      condition: "Fair",
    },
  ]);

  console.log("inventory seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Travis",
    lastName: "Paul",
    userName: "tp123",
    email: "ptgamer@testmail.com",
    password: "password12345",
    orders: [
      {
        inventory: [inventory[3], inventory[0], inventory[1]],
      },
    ],
    rating: 2,
  });

  await User.create({
    firstName: "Andres",
    lastName: "Jung",
    userName: "aj123",
    email: "ajnerd@testmail.com",
    password: "password12345",
    orders: [
      {
        product: [product[2], product[2], product[4]],
      },
    ],
    rating: 4,
  });

  console.log("users seeded");

  process.exit();
});
