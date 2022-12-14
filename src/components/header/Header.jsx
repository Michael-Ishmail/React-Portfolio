import React from 'react'
import './header.css'
import ME from '../../assets/Me.jpg'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Michael Ishmail</h1>
        <h5 className='text-light'>Welcome to my portfolio!</h5>
        <h1 className='wave'>👋</h1>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        {/* <a href='#contact' className='scroll_down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header