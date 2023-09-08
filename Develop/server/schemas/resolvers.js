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
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updatePlant: async (parent, args) => {
      const { _id, common_name, scientific_name, watering, sunlight } = args;

      try {
        const updatedPlant = await Plant.findByIdAndUpdate(
          _id,
          {
            common_name,
            scientific_name,
            watering,
            sunlight
          },
          { new: true }
        );

        if (!updatedPlant) {
          throw new Error('Plant not found');
        }

        return updatedPlant;
      } catch (error) {
        throw new Error(`Error updating plant: ${error.message}`);
      }
    },
    deleteUser: async (parent, args) => {
      const { _id } = args;

      try {
        const deletedUser = await User.findByIdAndDelete(_id);

        if (!deletedUser) {
          throw new Error('User not found');
        }

        return { _id: deletedUser._id };
      } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`);
      }
    },
    deletePlant: async (parent, args) => {
      const { _id } = args;

      try {
        const deletedPlant = await Plant.findByIdAndDelete(_id);

        if (!deletedPlant) {
          throw new Error('Plant not found');
        }

        return { _id: deletedPlant._id };
      } catch (error) {
        throw new Error(`Error deleting plant: ${error.message}`);
      }
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
    addWateringEvent: async (parent, {input}) => {
      const { plantId, date, watered } = input;

      try {
        const plant = await Plant.findById(plantId);

        if (!plant) {
          throw new Error('Plant not found');
        }

        plant.wateringHistory.push({
          date: new Date(date),
          watered
        });

        await plant.save();

        return plant;
      } catch (error) {
        throw new Error(`Error adding water: ${error.message}`);
      }
    }
  }
};

module.exports = resolvers;
