import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/Nav'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork'
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './components/Footer';

import './app.css'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <div className='nav' style={{ width: '50px', zIndex: '2' }}>
          <NavBar />
        </div>
        <div className='d-flex flex-column min-vh-100' style={{ overflow: 'hidden', width: '100%' }}>
          <div className="wrapper flex-grow-1">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/aboutme" component={AboutMe} />
              <Route exact path="/mywork" component={MyWork} />
              <Route exact path="/contactme" component={ContactMe} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          </div>
            <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;
