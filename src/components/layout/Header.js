//this is a functional component, it is just a markup

import React from 'react';
import { Link } from 'react-router-dom';//need to import this to use link
//notice this is function based component
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  paddingBottom: '2%'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;