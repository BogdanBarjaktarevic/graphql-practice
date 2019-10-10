import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionsOverview from "./CollectionsOverview";
import Loading from "./Loading";

const GET_COLLECTIONS = gql`
  {
    collections {
      title
      id
      items {
          name
          id
      }
    }
  }
`;

const CollectionsContainer = () => {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        if(loading) return <Loading />
        return <CollectionsOverview collections={data.collections}/>
      }}
    </Query>
  );
};

export default CollectionsContainer;
