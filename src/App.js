import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import {BrowserRouter,Route} from "react-router-dom"
import Footer from "./components/Footer";

class App extends Component {

  
  render() {
    let message = "";
    return (
      <div className="App">
        <Header message={message} />
        <p className="App-intro">
          Welcome to On The Fly! Find an event near you!
        </p>

        <BrowserRouter>
          <Route exact path="/" component={EventForm}/>
          <Route path = "/EventsList" component={EventList} />
        </BrowserRouter>
        <Footer />
        
      </div>
    );
  }
}



export default App;
