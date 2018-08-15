//-------------------------React Boiler Plate
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//-------------------------Component Files
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
//-------------------------Other Imports
const API_KEY = 'AIzaSyBAbu36HFStXbL3D577r1yheldu7Y4AdfQ'

// Create a new componet
// This component should product some HTMl.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos })
    })
  }

  render() {
    const { videos } =this.state;
    return (
      <div>
        <SearchBar />
        <VideoList videos={videos}/>
      </div>
    ) 
  }
}

// Takes this componetn generated HTML and print it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));