import React from 'react';

const Icons = ({ userDetailsID, user }) => {

  console.log(user)

  if (userDetailsID == user.id ) {

  return (
    <div>

    <a href={'mailto:' + user.email}>
      <img className="icon" src={require('../icons/email.svg')}/>
    </a>

    <a href={'http://' + user.website}>
      <img className="icon" src={require('../icons/world.svg')}/>
    </a>

    </div>
  )
} else {
  return (
    <div></div>
  )
}
}

export default Icons
