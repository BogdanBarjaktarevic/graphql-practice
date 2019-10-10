import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import SingleCollection from "./SingleCollection";
import Loading from "./Loading";

const GET_SINGLE_COLLECTION = gql`
    query getCollectionsByTitle($title: String!){
        getCollectionsByTitle(title: $title){
            id
            title
            items {
                id
                name
            }
        }
    }
`;

const SingleCollectionContainer = ({ title }) => {
    return (
    <Query query={GET_SINGLE_COLLECTION} variables={{ title: title }}>
      {({ loading, data }) => {
        if(loading) return <Loading />
        return <SingleCollection items={data.getCollectionsByTitle.items} title="bla"/>
      }}
    </Query>
    )
};

export default SingleCollectionContainer;
