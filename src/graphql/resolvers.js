import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Mutation {
    ToggleHidden: Boolean!
  }
`;

const GET_HIDDEN = gql`
  query ToggleHidden {
    hidden @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleHidden: (_root, _args, { cache }) => {
      const { hidden } = cache.readQuery({
        query: GET_HIDDEN
      });

      cache.writeQuery({
        query: GET_HIDDEN,
        data: { hidden: !hidden }
      });

      return !hidden;
    }
  }
};
