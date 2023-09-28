const { UserType, UserInputType } = require("../typedefs/user");
const User = require("../../models/user");
const userMutations = {
    createUser: {
        type: UserType,
        args: {
            userInput: { type: UserInputType },
        },
        resolve: async (parent, args) => {
            console.log(args.userInput);
            console.log(parent);
            const user = new User({
                firstname: args.userInput.firstname,
                lastname: args.userInput.lastname,
                email: args.userInput.email,
                password: args.userInput.password,
            });

            return user.save();
        },
    },
};

module.exports = userMutations;
