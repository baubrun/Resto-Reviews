import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Restaurants from "./components/Restaurants"
import Update from "./components/Update"
import RestaurantDetail from "./components/RestaurantDetail"
import NotFound from "./components/NotFound"
import "./css/app.css"

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Restaurants} />
      <Route path="/restaurants/:restaurantId/update" component={Update} />
      <Route path="/restaurants/:restaurantId/" component={RestaurantDetail} />
      <NotFound />
    </Switch>
      
    </BrowserRouter>
  )
}

export default App
