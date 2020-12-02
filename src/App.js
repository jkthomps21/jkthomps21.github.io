import React from 'react';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/project' component={Project} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/' component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App;
