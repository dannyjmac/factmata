import React, { Component } from 'react';

class UserDetails extends Component {

  render() {

    const { userDetailsID, user } = this.props

    if (userDetailsID == user.id) {

      return (
        <div className="user-address">
          <h3>{user.company.name}</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>
      )

    } else {

      return (
        <div></div>
      )

    }

  }

}

export default UserDetails
