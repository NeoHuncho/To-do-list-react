//also a functional component
import React from 'react'

function About() {
  return (
    //you use React.Fragment when you dont need something like a div
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. Use it as you please !</p>
    </React.Fragment>
  )
}


export default About;