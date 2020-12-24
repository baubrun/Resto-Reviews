import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Restaurants"
import ReviewForm from "./components/ReviewForm"
import RestaurantDetail from "./components/RestaurantDetail"
import NotFound from "./components/NotFound"
import "./css/app.css"

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/restaurants/:restaurantId/update" component={ReviewForm} />
      <Route path="/restaurants/:restaurantId/" component={RestaurantDetail} />
      <NotFound />
    </Switch>
      
    </BrowserRouter>
  )
}

export default App
