import React from "react";
import Collection from "./Collection";

const CollectionsOverview = ({ collections }) => {
  const renderCollections = () => {
    return collections.map(collection => {
      return (
        <Collection
          key={collection.id}
          items={collection.items}
          title={collection.title}
        />
      );
    });
  };

  return <div>{renderCollections()}</div>;
};

export default CollectionsOverview;
