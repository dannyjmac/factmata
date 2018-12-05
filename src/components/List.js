import React, { Component } from 'react';
import UserDetails from './UserDetails.js'
import Icons from './Icons.js'

class List extends Component {

  state = {
    userDetailsID: ""
  }

  changeID(e) {
    if (e.target.id == this.state.userDetailsID) {
      this.setState({ userDetailsID: "" })
    } else {
      this.setState({userDetailsID: e.target.id})
    }
  }

  render() {

    const { userDetailsID } = this.state
    const { list } = this.props

    if (list) {

    return (

      <div>
        {list.map(user =>
        <div className="list-item" key={user.id}>

          <div className="header-container">
            <h2 id={user.id} onClick={(e) => this.changeID(e)}>{user.name}</h2>
            <Icons userDetailsID={userDetailsID} user={user}/>
          </div>

          <div className="username">@{user.username}</div>
          <UserDetails userDetailsID={userDetailsID} user={user}/>

        </div>
        )}
      </div>
    )

  } else {
    return null
  }

  }

}

export default List
