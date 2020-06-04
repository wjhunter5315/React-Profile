import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import TestPage from "./pages/TestPage";
import SliderPage from "./pages/SliderPage";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/slider" component={SliderPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
