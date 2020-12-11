import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from '../src/components/Navbar'
import Login from './screens/Login'
import Vines from './screens/Vines'
import Movies from './screens/Movies'
import Songs from './screens/Songs'
import Gaming from './screens/Gaming'
import Channels from './screens/Home'

// import 'bootstrap/dist/css/bootstrap.min.css';


const App=()=>{
  return(
    <div className="App">
     
    <BrowserRouter>
      <Route exact path='/' exact component={Login} />
      <Route exact path='/vines' exact component={Vines} />
      <Route exact path='/gaming' exact component={Gaming} />
      <Route exact path='/songs' exact component={Songs} />
      <Route exact path='/movies' exact component={Movies} />
      <Route exact path='/home' exact component={Channels} />
    </BrowserRouter>
   
    </div>
  )
}



export default App;