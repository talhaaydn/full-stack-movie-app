import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { Route } from "react-router-dom";

import Header from "./components/Header";
import MoviesPage from "./components/pages/MoviesPage";

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Header />

        <Container text>
          <Route path="/movies" component={MoviesPage}></Route>          
        </Container>
      </div>
    );
  }
}

export default App;
