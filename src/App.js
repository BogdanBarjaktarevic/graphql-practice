import React from "react";
import "./App.css";
import CollectionsContainer from "./components/CollectionsContainer";
import SingleCollectionContainer from "./components/SingleCollectionContainer";
import ShapeContainer from "./components/ShapeContainer";
import InfoContainer from "./components/InfoContainer";

function App() {
  return (
    <div className="App">
      <CollectionsContainer />
      <SingleCollectionContainer title="jackets" />
      <ShapeContainer />
      <InfoContainer />
    </div>
  );
}

export default App;
