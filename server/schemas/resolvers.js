const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Inventory, Category, Order } = require("../models");
const { signToken } = require("./utils/auth");
const stripe = require("stripe")(
  "sk_test_51Jz3E3ImJghqatoxy66Mf1qLtKLbjHkQz6BkzoRSFL8LYrlu0h6zGZ2ZKS5puyO44y3y3QDetEHb8qBd4stWHqCV00cjsl2lOd"
);

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     // const user = await User.findById(context.user._id).populate({
    //     //   path: "orders.products",
    //     //   populate: "category",
    //     // });

    //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },
    user: async () => {
      return User.find();
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
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
        payment_method_types: ["card"],
        cart_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, userName, email, password }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password,
      });
      const token = signToken(user);

      return { token, user };
    },

    addInventory: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const inventory = new Inventory({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { inventory: inventory },
        });

        return inventory;
      }
    },

    addProduct: async (parent, args) => {
      const product = await Product.create(args);

      return product;
    },

    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
