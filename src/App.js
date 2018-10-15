import React, { Component } from 'react';
import HomePage from './Components/HomePage/homepage'
import Header from './Components/Header/header';
import Login from './Components/Login/login';
import Register from './Components/Register/register'
import RenderKamar from './Components/RenderKamar/renderkamar'
import { Carousel } from 'react-responsive-carousel';
import { Route } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div>
          <Route exact path='/' component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/kamar" component={RenderKamar} />
          <Route path="/register" component={Register} />
        </div>
      </div>
    );
  }
}

export default App;
