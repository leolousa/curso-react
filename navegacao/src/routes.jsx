import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './views/examples/Home'
import About from './views/examples/About'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes