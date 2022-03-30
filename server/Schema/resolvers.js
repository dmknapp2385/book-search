const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context ) => {
            if(context.user){
            const user = await User.findOne({
              $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            });
        
            return user
          }

          throw new AuthenticationError('Not Logged In')
        }
    },

    Mutation: {
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
            return {token, user};
        },
        addUser:  async (parent, args) => {
            const user = await User.create(args);
        
            if (!user) {
              throw new AuthenticationError('Something Went Wrong')
            }
            const token = signToken(user);
            return {token, user};
        },
        
    }
};

module.exports = resolvers;