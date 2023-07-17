import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <a href="/" className='logo'><FontAwesomeIcon icon = {faUtensils} id='logo-icon'/>La Mesa.</a>

      <nav className='navbar'>
        <a href="/" className='active'>Home</a>
        <a href="#dishes">Dishes</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#review">Review</a>
        
      </nav>

      <div className="icons">
      <FontAwesomeIcon icon = {faBars} id='menu-bars'/>
      <FontAwesomeIcon icon = {faSearch} id='search'/>
      <a href="/"><FontAwesomeIcon icon = {faShoppingCart} id='cart'/></a>
      <a href="/"><FontAwesomeIcon icon = {faHeart} id='heart'/></a>
      </div>

      

    </header>
    
  )
}

export default Header