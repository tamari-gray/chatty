import React, { Component } from 'react'

import Login from './Login'
import SelectAvatar from './SelectAvatar'
import SelectRoom from './SelectRoom'

export default class UserForm extends Component {
  constructor(props){
    super(props)
    this.updateFunctions = {next:this.nextStep, prev:this.prevStep, update: this.handleInput }
    this.state = {
      step: 0,
      steps: [
        {
          title: 'login'
        },
        {
          title: 'select avatar'
        },
        {
          title: 'select chatroom'
        }
      ],
      userName: 'tam',
      chatroom: '',
      avatar: ''
    }
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  }
  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    })
  }

  handleInput = input => e => {
    console.log(input)
    console.log(e)

    this.setState({
      [input]: e.target.value
    })
    console.log(this.state)
  }

  render() {
    switch (this.state.step) {
      case 0:
        return (
          <Login update={this.updateFunctions} step={this.state.step} name={this.state.userName}/>
        )
        break;
      case 1:
        return (
          <SelectAvatar 
            update={this.updateFunctions} 
            step={this.state.step} 
            name={this.state.userName}
            avatar={this.state.avatar}
            />
        )
        break;
      case 2:
        return (
          <SelectRoom
          update={this.updateFunctions} 
          step={this.state.step} 
          name={this.state.userName}
          avatar={this.state.avatar}/>
        )
        break;
      default:
        break;
    }  
  }
}
