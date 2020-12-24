import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home"
import ReviewForm from "./components/ReviewForm"


const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/restaurants/:restaurantId" component={ReviewForm} />
      <Route exact path="/" component={Home} />
    </Switch>
      
    </BrowserRouter>
  )
}

export default App
