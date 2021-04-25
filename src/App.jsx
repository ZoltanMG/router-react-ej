import React from 'react';
import Usuarios from './Components/Usuarios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Usuario from './Components/Usuario';

function App() {
  return (
    <Router>
      <Link to="/">Ususarios</Link>
      <Switch>
        <Route exact path="/">
          <Usuarios/>
        </Route>
        <Route path="/usuario/:id">
          <Usuario/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
