import React from "react";

import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import Shape from "./Shape";

const TOGGLE_HIDDEN = gql`
  mutation ToggleHidden {
    toggleHidden @client
  }
`;

const ShapeContainer = () => {
  return (
    <Mutation mutation={TOGGLE_HIDDEN}>
      {toggleHidden => <Shape toggleHidden={toggleHidden} />}
    </Mutation>
  );
};

export default ShapeContainer;
