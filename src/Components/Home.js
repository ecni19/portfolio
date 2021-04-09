import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <h1>Hi my name is Eric.</h1>
          <br></br>
          <h1>I'm a student and aspiring software engineer</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
