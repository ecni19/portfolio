import React from 'react';
import Grid from "@material-ui/core/Grid";
import ExperienceCard from './ExperienceCard';
import './Experience.css';

const uniqlo = ['Provided high quality customer service.', 'Communicated effectively with coworkers and managers.',
                'Discussed daily and weekly sales and how they can be improved.', 'Kept store displays clean and organized.'];
const include = ['Used HTML and CSS to create website frontends for local non-profit organizations.','Communicated with design team to ensure layouts were correct.'];
function Experience() {
  return(
    <div className="experience-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <ExperienceCard company={"#include @ Davis"} role={"Frontend Developer"} dates={"09/2020 - Current"} respon={include}/>
        <ExperienceCard company={"UNIQLO"} role={"Retail Sales Associate"} dates={"06/2019 - 08/2019"} respon={uniqlo}/>
      </Grid>
    </div>
  )
}

export default Experience;