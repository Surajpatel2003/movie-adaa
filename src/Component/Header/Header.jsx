import React from 'react'
import logo from "../../logo.png"
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
export default function Header() {
  return (
    <nav className="header">
        <img src={logo} alt="" srcset="" />
        <div>
            <Link to="tvshow">TV Shows</Link>
            <Link to="tvshow">Movies</Link>
            <Link to="tvshow">Recently Added</Link>
            <Link to="tvshow">My List</Link>

        </div>
        <ImSearch/>
    </nav>
  )
}
