import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

import Form from "./Form";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ( {
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: "auto"
  }
});

export default withStyles (styles) (({
  classes,
  muscles,
  exercises,
  category,
  editMode,
  onSelect,
  exercise,
  exercise: {
    id,
    title = "Welcome to fintness Tracker",
    description = "Please select an exercise from the list of the left."
  },
  onDelete,
  onSelectEdit,
  onEdit
  
}) => (
  <Grid container>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
        {exercises.map(
          ([muscle, exercises]) =>
            !category || category === muscle ? (
              <Fragment key={muscle}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {muscle}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <Edit />
                        </IconButton>

                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
        {editMode ? (
          <Form 
          exercise={exercise}
          muscles={muscles} 
          onSubmit={onEdit} 
           />
        ) : (
          <Fragment>
            <Typography variant="headline">{title}</Typography>

            <Typography variant="subheading" style={{ marginTop: 20 }}>
              {description}
            </Typography>
          </Fragment>
        )}
      </Paper>
    </Grid>
  </Grid>
));
