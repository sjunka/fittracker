import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


export default ({ 
  exercises,
  category,
  onSelect,
  exercise: {
    id,  
    title= 'Welcome to fintness Tracker',
    description='Please select an exercise from the list of the left.',
    }
  }) => (
  <Grid container>
    
    <Grid item xs>
      <Paper style={styles.Paper}>
        {exercises.map(([muscle, exercises]) => (
         !category  || category === muscle
         ? <Fragment key= {muscle}>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {muscle}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) => (
                  <ListItem
                   button
                   key= {id}
                   onClick = {() => onSelect(id)}
                   >
                    <ListItemText
                     primary={title}
                      />
                  </ListItem>
                ))}
              </List>
              
            </Fragment>

         : null
         
        ))}
      </Paper>
    </Grid>

    <Grid item xs>
      <Paper style={styles.Paper}>
        <Typography variant="headline">{title}</Typography>

        <Typography variant="subheading" style={{ marginTop: 20 }}>
        {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

