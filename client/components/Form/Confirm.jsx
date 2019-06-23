import React, { Component } from 'react'
import {List, ListItem, ListItemText} from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton'
import { userInfo } from 'os';

export default class Confirm extends Component {

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
          <AppBar title={'Confirm details ' + this.props.name}/> 
          <List>
            <ListItem 
              primaryText={"name"}
              secondaryText={this.props.name}
            />
            <ListItem 
              primaryText={"avatar"}
              secondaryText={this.props.avatar}
            />
            <ListItem 
              primaryText={"chatroom"}
              secondaryText={this.props.room}
            />
            
          </List>

          <Link to={`/${this.props.name}/${this.props.room}`}>
            <RaisedButton 
              label='Continue'
              primary={true}
            />
          </Link>
               
          <RaisedButton 
            label='Back'
            primary={false}
            onClick={this.prev}
          />
        </>
      </MuiThemeProvider>
    )
  }
}
