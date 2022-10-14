import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Web Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Proficient</small>
              </div> 
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Node</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Databases (Mongo/SQL)</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Soft Skills</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Leadership</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Resourcefulness</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Adaptability</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Decision making</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Creativity</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Organized</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience