import React from 'react'
import {Route} from 'react-router-dom'

import UserForm from './Form/UserForm'
import Chatroom from './Chatroom'

const App = () => {
  return (
    <>
      <Route path='/' exact render={() =>
        <UserForm/>
      }/>
      <Route path='/:userId/:roomId' render={({match}) =>
        <Chatroom match={match}/>
      }/>
    </>
  )
}

export default App
