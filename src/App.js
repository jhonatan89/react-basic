import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Gallery from './components/gallery/Gallery';
import Counter from './components/counter/Counter';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path='/gallery'>
              <Gallery />
            </Route>
            <Route exact path='/counter'>
              <Counter></Counter>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
