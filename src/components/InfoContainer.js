import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Info from "./Info";

const GET_HIDDEN = gql`
  {
    hidden @client
  }
`;

const InfoContainer = () => {
  return (
    <Query query={GET_HIDDEN}>
      {({ loading, error, data }) => {
        console.log(data.hidden);
        return <Info getHiddenProp={data.hidden} />;
      }}
    </Query>
  );
};

export default InfoContainer;
