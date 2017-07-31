import React from 'react'
import Overview from './Overview'
import Experience from './Experience'
import Education from './Education'

const Resume = () => {
  return (
    <div className="Resume">
      <div className="header">
        <h1>Jay Park</h1>
      </div>
      <Overview />
      <Experience />
      <Education />
    </div>
  )
}

export default Resume 