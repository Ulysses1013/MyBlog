import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li className="foot-bar">
            <Link to="#top" className="foot-link">△TOP</Link>
          </li>
          <li className="foot-bar">
            <Link to="/privacy-policy" className="foot-link">プライバシーポリシー＆免責事項</Link>
          </li>
        </ul>
        
        <p>&copy;{new Date().getFullYear()} MecaBlog. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
