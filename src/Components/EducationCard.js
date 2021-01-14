import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Education.css";

function EducationCard(props) {
  const courseList = props.course.join(', '); // separate array items with commas
  return (
    <Grid container className="education-container" direction="row" justify="space-evenly" alignItems="center">
      <Grid item xs={4}>
        <h1>{props.name}</h1>
        <h2>{props.degree}</h2>
        <h2>{props.time}</h2>
        <br></br>
        <h2>
          Notable courses: {courseList}
        </h2>
      </Grid>
      <Grid item xs={7}>
        <img alt="Davis" src={props.image}></img>
      </Grid>
    </Grid>
  );
}

export default EducationCard;
