import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/Nav'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork'
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/mywork" component={MyWork} />
        <Route exact path="/contactme" component={ContactMe} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
