import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Header, Footer } from "./Components/Layout";
import Exercises from "./Components/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExcersisesByMuscle = () => {
    const initialExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, initialExercises)
    );
  };

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));
  };

  handleExerciseCreate = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));

  handleExerciseDelete = id => {
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));
  };

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));

  render() {
    const exercises = this.getExcersisesByMuscle(),
      { category, exercise, editMode } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />

        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          editMode={editMode}
          muscles={muscles}
          onEdit={this.handleExerciseEdit}
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
