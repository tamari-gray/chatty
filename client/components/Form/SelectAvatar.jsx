import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
export default class SelectAvatar extends Component {

  next = (e) => {
    e.preventDefault()
    this.props.update.next()
  }
  prev = (e) => {
    e.preventDefault()
    this.props.update.prev()
  }

  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title={'Select your avatar ' + this.props.name}/> 
          avatar optoions
          <RaisedButton 
            label='Back'
            primary={false}
            onClick={this.prev}
          />
          <RaisedButton 
            label='Next'
            primary={true}
            onClick={this.next}
          />
        </>
      </MuiThemeProvider>
    )
  }
}
