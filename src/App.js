import React, { Component } from 'react';
import List from './components/List.js'

const url = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {

  state = {
    usersData: ""
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
        .then(data => this.setState({usersData: data}))
  }

  render() {

    const { usersData } = this.state

    return (
      <div className="app">
        <List list={usersData}/>
      </div>
    );
  }
}

export default App;
