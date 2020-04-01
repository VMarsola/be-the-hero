import React from 'react'
import History from './helpers/History'
import {
    Route,
    Router,
    Switch,
    Redirect,
} from 'react-router-dom'

// Paginas
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

const Routes = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path='/' render={() => <Logon />} />
        <Route exact path='/register' render={() => <Register />} />
        <Route exact path='/profile' render={() => <Profile />} />
        <Route exact path='/newIncident' render={() => <NewIncident />} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}

export default Routes