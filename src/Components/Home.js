import React from 'react';
import Grid from "@material-ui/core/Grid";
import './Home.css';

function Home() {
  return (
    <Grid container className="home-container" direction="column" justify="center" alignItems="center">
      <Grid item>
        <h1>Hi my name is Eric.</h1>
        <br></br>
        <h1>I'm a student and aspiring software engineer</h1>
      </Grid>
    </Grid>

  );
}

export default Home;