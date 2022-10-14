import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/Portfolio2.png'
import IMG3 from '../../assets/Portfolio3.png'
import IMG4 from '../../assets/Portfolio4.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='Portfolio project number 1'></img>
          </div>
          <h3>Instaclone</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/VN135766/Instaclone-' className='btn' target='_blank'>Github Repository</a>
            <a href='https://still-eyrie-08657.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt='Portfolio project number 2'></img>
          </div>
          <h3>Event Buddy</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/cmskorcz/bootcamp_project_2' className='btn' target='_blank'>Github Repository</a>
            <a href='https://murmuring-springs-16959.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt='Portfolio project number 3'></img>
          </div>
          <h3>Tourist Buddy</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/BennySon9/Tourist-Buddy' className='btn' target='_blank'>Github Repository</a>
            <a href='https://bennyson9.github.io/Tourist-Buddy/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt='Portfolio project number 4'></img>
          </div>
          <h3>This website!</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/Michael-Ishmail/React-Portfolio' className='btn text' target='_blank'>Github Repository</a>
            <a href='https://michael-ishmail.github.io/React-Portfolio/' className='btn btn-primary text' target='_blank'>Live Demo (But you're here 🤔)</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio