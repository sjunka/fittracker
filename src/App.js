import React, { Component, Fragment } from "react";

import { Header, Footer } from "./Components/Layout";
import Exercises from "./Components/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    exercise: {}
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

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleExerciseCreate = exercise => {
     this.setState( ( { exercises } ) => ({
           exercises: [
             ...exercises,
             exercise
           ] 
     }))
  }

  render() {
    const exercises = this.getExcersisesByMuscle(),
      { category, exercise } = this.state;

    return (
      <Fragment>
        <Header muscles={muscles} onExerciseCreate={this.handleExerciseCreate}/>

        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
        />

        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelect}
          category={category}
        />
      </Fragment>
    );
  }
}

export default App;
