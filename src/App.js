import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Allcourses from './components/Allcourses/Allcourses';
import Details from './components/Details/Details';
import About from './components/About/About'
import Contactus from './components/Contactus/Contactus';
import Error from './components/Error/Error';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">


      <Router>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/allcourses">
            <MenuBar></MenuBar>
            <Allcourses></Allcourses>
            <Footer></Footer>
          </Route>
          <Route exact path="/about">
            <MenuBar></MenuBar>
            <About />
            <Footer></Footer>
          </Route>
          <Route exact path="/contact">
            <MenuBar></MenuBar>
            <Contactus />
            <Footer></Footer>
          </Route>
          <Route path="*">
            <MenuBar></MenuBar>
            <Error></Error>
            <Footer></Footer>
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
