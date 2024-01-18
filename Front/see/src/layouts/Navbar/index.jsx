import React, { useState } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  function togleNavbar() {
    setOpen(!open)

  }

  return (
    <div className='navbar'>

      {/* saytda umumi gorsenen hisse */}
      <div className='nav'>
        <div className="see">
          <h2>Selling </h2>
          <div className='kvadrat'></div>
        </div>
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/add'}>Add</NavLink></li>
          <li><NavLink to={'/basket'}>Basket</NavLink></li>
          <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
        </ul>
      </div>


      {/* responsiv olanda gorsenen hissesi umumi  */}
      <div className="bars">

        <div className="menu">
          <div className="see">
            <h2>Selling </h2>
            <div className='kvadrat'></div>
          </div>
          <i className="fa-solid fa-bars" onClick={togleNavbar}></i>
        </div>


        <div className={`click ${open ? 'open' : ''}`}>
          <ul >
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/add'}>Add</NavLink></li>
            <li><NavLink to={'/basket'}>Basket</NavLink></li>
            <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Navbar