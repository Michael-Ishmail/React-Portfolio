import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='www.linkedin.com/in/michael-ishmail-74b451157' target='_blank'><BsLinkedin/></a>
        {/* <a href='https://github.com' target='_blank'><BsGithub/></a> */}
    </div>
  )
}

export default HeaderSocials