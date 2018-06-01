import React, { Component, Fragment } from "react";
import "./App.css";

import { Header, Footer } from "./Components/Layout";
import Excercises from "./Components/Exercises";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Excercises />

        <Footer />
      </Fragment>
    );
  }
}

export default App;
