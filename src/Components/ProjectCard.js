import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    height: '30vh',
    // marginTop: '70px',
    border:'2px solid black'
  },
}));

function ProjectCard(props) {  
  const classes = useStyles();
  const techList = props.tech.map(item => <li>{"- " + item}</li>); // render the array of technologies passed in
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item xs={props.size}>
        <Paper className={classes.paper}>
          <h1 style={{ textAlign: "center" }}>{props.projectName}</h1>
          <h2 style={{ textAlign: "center" }}>{props.date}</h2>
          <br/>
          <p style={{textAlign:"center"}}>{props.details}</p>
          <br/>
          <h2 style={{textAlign:"center", fontSize:"16pt"}}>Technologies used:</h2>
          <ul style={{ textAlign:"center", fontSize: "16pt" }}>
            {techList}
          </ul>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ProjectCard;
