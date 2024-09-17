import React from 'react'
import Header from '../common/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const pages = () => {
  return (
    <Router>
        <Switch>
        <Header />
        {/* <Route path="/">
            <About />
        </Route> */}
        
        </Switch>
    </Router>
  )
}

export default pages