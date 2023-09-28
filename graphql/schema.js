const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require("graphql");
const userMutations = require("../graphql/mutations/user");
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: async (parent, args) => {
                return "Hello world";
            },
        },
    }),
});

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: () => ({
        helloMutation: {
            type: GraphQLString,
            resolve: async (parent, args) => {
                return "Hello world";
            },
        },
        ...userMutations,
    }),
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
