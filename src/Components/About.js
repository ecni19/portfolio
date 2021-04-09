import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./About.css";

function About() {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Paper className="ppr" elevation={1}>
            <p className="paragraph" style={{margin: 0, padding: 0}}>
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