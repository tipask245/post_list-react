import React from 'react'
import { Link } from "react-router-dom";
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <h3 className={classes.name}>tipask245</h3>
      <ul className={classes.nav_ul}>
        <li className={classes.nav_link}>
          <Link to='/'>Post list</Link>
        </li>
        <li className={classes.nav_link}>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar