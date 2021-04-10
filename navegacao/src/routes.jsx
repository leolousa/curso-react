import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./views/examples/Home"
import About from "./views/examples/About"
import Param from "./views/examples/Param"
import NotFound from "./views/examples/NotFound"

function Routes() {
  return (
    <Switch>
      <Route exact path="/" exact component={Home}></Route>
      <Route path="/param/:id" component={Param}></Route>
      <Route path="/param/:id" component={Param}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="*" component={NotFound}></Route>
    </Switch>
  )
}

export default Routes
