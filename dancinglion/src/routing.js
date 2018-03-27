import React, { Component } from 'react';
import { Switch,  Route } from 'react-router-dom'

//Routes
import Main from './components/routes/main'
import Student from './components/routes/student'

class Routing extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/student' component={Student} />
        </Switch>
      </main>
    );
  }
}

export default Routing;
