import React from 'react'
import ProfileCard from './ProfileCard.jsx'
import './style.css'

// Parent component - holds the data and passes one person at a time
// to ProfileCard via props.
const App = () => {
  const people = [
    {
      firstName: "Simran",
      lastName: "Kaur",
      email: "simran.kaur@example.com",
      gender: "Female"
    },
    {
      firstName: "Aditya",
      lastName: "Sharma",
      email: "aditya.sharma@example.com",
      gender: "Male"
    },
    {
      firstName: "Neha",
      lastName: "Verma",
      email: "neha.verma@example.com",
      gender: "Female"
    }
  ]

  return (
    <div>
      <h2>Profile Cards</h2>
      {people.map((person, index) => (
        <ProfileCard key={index} person={person} />
      ))}
    </div>
  )
}

export default App
