import React from "react"
import PropTypes from "prop-types"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <Link to = "/" className = "site_title"> Hairy Dawg</Link>
        <CustomLink to = "/">About Me</CustomLink>
        <CustomLink to = "/resume">Resume</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to = {to} {...props}>
        {children}
      </Link>
    </li>
  )
}
   
NavBar.defaultProps = {
  title: "Navigation Bar"
}

NavBar.propTypes = {
  title: PropTypes.string,
}

export default NavBar