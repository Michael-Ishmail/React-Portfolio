import React from 'react'
import './about.css'
import ME from '../../assets/placeholder-image.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me!</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        {/* <div className="about_me">
          {/* <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div> */}
        {/* </div> */}

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2 Years Experience</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>General Motors</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Specialties</h5>
              <small>Analysis and web development</small>
            </article>
          </div>

          <p>
            Hello! I'm a young professional in the Finance field who is passionate about technology.
            I aim to leverage my experience in technology and finance to analyze data efficiently and accurately,
            and to provide effective solutions for my clients. I currently hold a Bachelors degree in Finance from Wayne
            State University, and just recently earned a certificate from Michigan State University from their web development bootcamp.
          </p>

          {/* <a href='#contact' className='btn btn-primary'>Contact Me</a> */}
        </div>
      </div>
    </section>
  )
}

export default About