const { AuthenticationError } = require("apollo-server-express");
const { User, Order, Category, Product, Inventory } = require("../models");
const stripe = require("stripe")(
  "sk_test_51Jz3E3ImJghqatoxy66Mf1qLtKLbjHkQz6BkzoRSFL8LYrlu0h6zGZ2ZKS5puyO44y3y3QDetEHb8qBd4stWHqCV00cjsl2lOd"
);

const resolvers = {
  Query: {
    user: async () => {},

    users: async () => {},

    product: async () => {},

    products: async () => {},

    categories: async () => {
      return await Category.find();
    },

    order: async () => {},

    checkout: async (parents, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const cart_items = [];
      const { products } = await order.populate("products").execPopulate();
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });
        const price = await stripe.products.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });
        cart_items.push({
          price: price.id,
          quantity: 1,
        });
      }
      const session = await stripe.checkout.session.create({
        payment_method_types: ["cards"],
        cart_items,
        mode: "payment",
        success_url: ``,
        cancel_url: ``,
      });
      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async () => {},

    updateUser: async () => {},

    addProduct: async () => {},

    updateProduct: async () => {},
  },
};

module.exports = resolvers;
