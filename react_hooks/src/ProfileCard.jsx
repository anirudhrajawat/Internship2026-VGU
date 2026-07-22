import React from 'react'

// ProfileCard receives a single "person" object as a prop.
// We destructure it right in the function parameter, same idea as before,
// but here we pull out the individual fields instead of the whole object.
const ProfileCard = ({ person }) => {
  const { firstName, lastName, email, gender } = person

  // Building the full name ourselves using a template literal
  const fullName = `${firstName} ${lastName}`

  return (
    <div className="profile-card">
      <h2>{fullName}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Gender:</strong> {gender}</p>
    </div>
  )
}

export default ProfileCard
