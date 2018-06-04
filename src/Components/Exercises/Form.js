import React, { Component } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 260
  }
});

export default withStyles(styles)(
  class extends Component {

    state = this.getInitialState();

    getInitialState ()  {
      const { exercise } = this.props
      return exercise ? exercise : {
        title: "",
        description: "",
        muscles: ""
      }
    }

    static getDerivedStateFromProps( {exercices}) {
      return exercices || null
    }

 

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        [name]: value
      });
    };

    handleSubmit = props => {
      //TODO-- : validar formulario

      this.props.onSubmit({
        id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
        ...this.state,
      });

      this.setState(this.getInitialState());


      
    };

    render() {

      const { title, description, muscles } = this.state,
      { classes, exercise, muscles: categories } = this.props


      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.FormControl}
          />

          <br />

          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />

          <TextField
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
            multiline
            rows="4"
            className={classes.FormControl}
          />
          <br />
          <Button onClick={this.handleSubmit} color="primary" variant="raised">
            {exercise ? 'Edit' : 'Create'}
          </Button>
        </form>
      );
    }
  }
);
