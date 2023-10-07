import React, { Component } from 'react'
import Home from './components/Home'
import Nav from './components/Nav'

import Business from './components/Business'
import Entertainment from './components/Entertainment'
import General from './components/General'
import Health from './components/Health'
import Science from './components/Science'
import Sports from './components/Sports'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export class App extends Component {
  render() {
    return (

      < div >
        <Router>


          <Nav />

          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='/Business' element={<Business />} />
            <Route exact path='/Entertainment' element={<Entertainment />} />
            <Route exact path='/General' element={<General />} />
            <Route exact path='/Health' element={<Health />} />
            <Route exact path='/Science' element={<Science />} />
            <Route exact path='/Sports' element={<Sports />} />
            {/* <Route exact path='/Technology' element={<Technology />} /> */}


          </Routes>


        </Router>
      </div >


    )
  }
}

export default App