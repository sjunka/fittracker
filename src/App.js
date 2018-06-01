import React, { Component, Fragment } from "react";

import { Header, Footer } from "./Components/Layout";
import Excercises from "./Components/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises
  };

  getExcersisesByMuscle = () => {
    return;
    Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };

  render() {
    console.log(this.getExcersisesByMuscle());
    return (
      <Fragment>
        <Header />

        <Excercises exercises={exercises} />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
