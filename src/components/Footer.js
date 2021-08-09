import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy;{new Date().getFullYear()} MecaBlog. All rights reserved.</p>
        <Link to="#top" className="back-top">△TOP</Link>
      </div>
    </footer>
  )
}

export default Footer
