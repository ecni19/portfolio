import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExperienceCard from './ExperienceCard';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingBottom:'50px'
  },
}));

const uniqlo = ['Provided high quality customer service.', 'Communicated effectively with coworkers and managers.',
                'Discussed daily and weekly sales and how they can be improved.', 'Kept store displays clean and organized.'];
const include = ['Used HTML and CSS to create website frontends for local non-profit organizations.','Communicated with design team to ensure layouts were correct.'];
function Experience() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center">
        <Grid item>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <ExperienceCard
                company={"#include @ Davis"}
                role={"Frontend Developer"}
                dates={"09/2020 - Current"}
                respon={include}
              />
            </Grid>
            <Grid item>
              <ExperienceCard
                company={"UNIQLO"}
                role={"Retail Sales Associate"}
                dates={"06/2019 - 08/2019"}
                respon={uniqlo}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Experience;