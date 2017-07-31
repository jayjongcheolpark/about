import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { blueGrey900 } from 'material-ui/styles/colors'
import Resume from './Resume'
import Projects from './Projects'


const MaterialApp = () => {
  return (
    <div>
        <Tabs 
          tabItemContainerStyle={{
            width: '400px',
            background: blueGrey900}}
          style={{background: blueGrey900}}
          contentContainerStyle={{background: '#FFF'}}>
          <Tab label="About">
            <Resume /> 
          </Tab> 
          <Tab label="Projects">
            <Projects />
          </Tab>
        </Tabs>
    </div>
  )
}

export default MaterialApp 