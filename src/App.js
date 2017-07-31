import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MaterialApp from './components/MaterialApp'
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css'
injectTapEventPlugin();

class App extends Component {
  
  render() {
    return (
      <MuiThemeProvider>
        <MaterialApp />
      </MuiThemeProvider>
    )
  }
}

export default App
