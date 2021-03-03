import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:"40px",
    width:"800px",
    marginBottom:'100px'
  },
  paragraph: {
    fontSize:"14pt",
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Paper className={classes.root} elevation={1}>
            <p className={classes.paragraph} style={{margin: 0, padding: 0}}>
              I am currently a sophomore at UC Davis majoring in computer science.
              My main interests are in frontend web development and creating webapps for social good.
              <br/> <br/>
              Aside from programming and school, I also enjoy cooking, baking, and anything food related!
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;