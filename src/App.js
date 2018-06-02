import React, { Component, Fragment } from "react";

import { Header, Footer } from "./Components/Layout";
import Exercises from "./Components/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    exercise:{}
  };

  getExcersisesByMuscle = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises; 
      }, {})
    );
  };

  handleCategorySelected = category => {
    this.setState({
      category
    } );
  };


  handleExerciseSelected = id => {
    this.setState(  ( {exercises} ) => ({
      exercise: exercises.find( ex => ex.id === id)
    }))
  }


  render() {
    const exercises = this.getExcersisesByMuscle(),
      { category, exercise} = this.state;

    return (
      <Fragment>
        <Header />

        <Exercises 
        exercise={exercise}
        exercises={exercises}
        category={category}
        onSelect = {this.handleExerciseSelected}
         />

        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelected}
          category={category}
        />
      </Fragment>
    );
  }
}

export default App;
