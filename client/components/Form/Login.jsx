import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
export default class Login extends Component {

  next = (e) => {
    e.preventDefault()
    this.props.update.next()
  }

  render() {
    return (
      <MuiThemeProvider>
        <>
        <AppBar title={'login'}/> 
          {/* <TextField onChange={this.props.handleInput([this.props.userName])}/> */}
          <TextField 
            hintText='Enter your first name'
            floatingLabelText='first name'
            defaultValue={this.props.name}
            onChange={this.props.update.update(this.props.name)}
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
