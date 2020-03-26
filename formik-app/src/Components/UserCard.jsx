import React from 'react'

const UserCard = props => {
  console.log(props);
  const {fName, lName, email, password} = props.data

  return (
    <div>
      <h2>Name: {fName} {lName}</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  )
}

export default UserCard
