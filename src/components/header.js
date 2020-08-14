import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <h1> Farm Botanica</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
