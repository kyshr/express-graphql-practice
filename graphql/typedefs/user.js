const {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLFloat,
    GraphQLString,
} = require("graphql");

exports.UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        _id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        created_at: { type: GraphQLFloat },
        updated_at: { type: GraphQLFloat },
    }),
});

exports.UserInputType = new GraphQLInputObjectType({
    name: "UserInputType",
    fields: () => ({
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    }),
});
