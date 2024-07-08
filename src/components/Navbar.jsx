import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='app-title-link' to="/transaction">
      <h1 className='app-title'>Budget App</h1>
      </Link>
        <Link className='new-transaction-button-link' to='/transaction/new'>
        <button className='new-transaction-button'>NEW TRANSACTION</button>
        </Link>
    </nav>
  )
}

export default Navbar