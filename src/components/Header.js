import React from "react"
import { Link } from "react-router-dom"

const Header = props => (
  <header className='navbar'>
    <section className='navbar-section'>
      <Link className='navbar-brand mr-10' to='/'>
        Home
      </Link>
      </section>
    <section className='navbar-section'>
      {props.links &&
        props.links.map(link => (
          <Link key={link.path} className='btn btn-link' to={`/${link.path}`}>
            {link.name}
          </Link>
        ))}
    </section>
  </header>
)

export default Header
