import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home"
import UpdateRestaurant from "./components/UpdateRestaurant"
import NotFound from "./components/NotFound"
import "./css/app.css"
import Reviews from './components/Reviews';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/restaurants/:restaurantId/update" component={UpdateRestaurant} />
      <Route path="/restaurants/:restaurantId/" component={Reviews} />
      <NotFound />
    </Switch>
      
    </BrowserRouter>
  )
}

export default App
