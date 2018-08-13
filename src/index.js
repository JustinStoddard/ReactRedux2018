import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBAbu36HFStXbL3D577r1yheldu7Y4AdfQ'

// Create a new componet
// This component should product some HTMl.



const App = () => {
  return <div>Hi!</div>;
}



// Takes this componetn generated HTML and print it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));