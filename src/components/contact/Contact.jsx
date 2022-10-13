import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <a href="mailto:Michaely.ishmail@gmail.com">Michaely.ishmail@gmail.com</a>
          </article>

          <article className='contact_option'>
            <AiOutlinePhone className='contact_option-icon'/>
            <h4>Phone</h4>
            <a href="tel:+158630605086">(586) 306-5086</a>
          </article>

          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'/>
            <h4>LinkdIn</h4>
            <a href="https://www.linkedin.com/in/michael-ishmail-74b451157/" target='_blank'>My Profile</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    )
}

export default Contact