import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    height: '26vh',
    border:'2px solid black'
  },
}));

function ExperienceCard(props) {
  const classes = useStyles();
  const responsibilities = props.respon.map(item => <li>{"- " + item}</li>)
  return(
    // <Grid container direction="column" alignItems="center">
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <h1>{props.company}</h1>
          <h2>{props.role}</h2>
          <h2>{props.dates}</h2>
          <br/>
          <ul style={{ fontSize: "16pt" }}>
            {responsibilities}
          </ul>
        </Paper>
      </Grid>
    // </Grid>
  )
}

export default ExperienceCard;