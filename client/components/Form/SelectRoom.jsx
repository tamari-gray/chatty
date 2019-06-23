import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router-dom';
export default class SelectRoom extends Component {

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
          <AppBar title={'Select a chat room ' + this.props.name}/>
          <ul style={{listStyleType: 'none'}}>
            {
              this.props.rooms.map(el => {
                return ( 
                  <Link key={el.name}>
                    <li
                    >
                      {el.name}
                    </li>
                  </Link>
                )
              })
            }
          </ul>
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
