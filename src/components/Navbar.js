import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'

import Links from '../constants/links'

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-title">
            MecaBlog
          </Link>
          <button aria-label="toggle" className="toggle-btn" onClick={toggle} >
            <FaBars></FaBars>
          </button>
        </div>
        <Links styleClass="nav-links" />
        
      </div>
    </nav>
  )
}

export default Navbar
