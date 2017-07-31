import React from 'react'
import CardProject from './CardProject'
import javafx from '../images/javafx_logo.jpg'

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
        title="Burger Shop Kiosk"
        subtitle="using javafx"
        imgs={<JavaFx />}
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