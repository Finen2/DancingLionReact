import React, { Component } from 'react';
import { Switch,  Route } from 'react-router-dom'

//Routes
import Main from './components/routes/main'
import Student from './components/routes/student'
import Teacher from './components/routes/teacher'

class Routing extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/student' component={Student} />
          <Route path='/teacher' component={Teacher} />
        </Switch>
      </main>
    );
  }
}

export default Routing;
