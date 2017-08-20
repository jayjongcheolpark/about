import React from 'react'
import CardProject from './CardProject'
import javafx from '../images/javafx_logo.jpg'
import kiosk from '../images/javafx-kiosk1.png'

const Kiosk = () => {
  return (
    <img style={{margin: '5% 5%', maxWidth: '90%', maxHeight: '90%'}}src={ kiosk } alt={"kiosk-project"} />
  )
}

const JavaFx = () => {
  return (
    <div> 
      <img className="javafx" src={ javafx } alt="javafx-logo" />
      <br />
    </div>
  )
}
const Projects = () => {
  return (
    <div className='Projects'>
      <CardProject 
        projImg={<Kiosk />}
        title="Burger Shop Kiosk"
        subtitle="using javafx"
        techImgs={<JavaFx />}
        desc="description"
        github="https://github.com/jayjongcheolpark/javafx-kiosk"
      />
      <CardProject 
        title="Github Rank"
        subtitle="using React"
        desc="description"
      />
    </div>
  )
}

export default Projects 