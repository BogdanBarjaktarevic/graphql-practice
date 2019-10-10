import React from 'react';
import './App.css';
import CollectionsContainer from './components/CollectionsContainer';
import SingleCollectionContainer from './components/SingleCollectionContainer';


function App() {
  return (
    <div className="App">
      <CollectionsContainer />
      <SingleCollectionContainer title="jackets"/>
    </div>
  );
}

export default App;
