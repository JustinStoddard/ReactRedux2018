import React, { Component } from 'react';

class SearchBar extends Component {
  
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    const { term } = this.state;
    return (
      <div>
        <input 
          value={term}
          onChange={event => this.setState({ term: event.target.value}) }/>
      </div>
    )
  }
}

export default SearchBar;