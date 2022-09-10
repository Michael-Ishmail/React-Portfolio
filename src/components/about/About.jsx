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
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

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
              <small>200+ Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>A lot!</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero molestiae, ad neque vel quod quis distinctio ipsam veritatis illo! Harum quod assumenda voluptatum nisi! Ipsam nemo dolor eum ea.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About