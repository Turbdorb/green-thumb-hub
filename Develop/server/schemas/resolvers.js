const { AuthenticationError } = require('apollo-server-express');
const { User, Plant } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'Plant',
          populate: 'plants'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPlant: async (parent, { common_name, scientific_name, watering, sunlight, description }, context) => {
      if (context.user) {
        const newPlant = await Plant.create({
          common_name,
          scientific_name,
          watering,
          sunlight,
          description
        })
      
    
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { plants: plant._id}}
      );
        return newPlant;
    }
      throw new AuthenticationError('Incorrect credentials');
    }
  }
};

module.exports = resolvers;
