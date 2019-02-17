import React, { Component } from 'react';

class HomePage extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }


  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        This is the Home Page!
        {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
      </div>
    )
  }
}

export default HomePage;
