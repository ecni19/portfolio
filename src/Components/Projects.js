import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}));

const silhouScrape = [
  "Python",
  "pandas, kmeans, matplotlib, numpy, sklearn",
  "Google Firebase",
  "UiPath",
];
const portfolio = ["React.js", "CSS", "Material-UI"];
const zoomInsights = ["React.js", "Google Firebase"];
const sankofa = ["React.js", "CSS"];
const anc = ["HTML", "CSS"]
function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={6} justify="center" style={{margin: 0, width:"100%"}}>
        <Grid item>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <ProjectCard
                projectName={"SilhouScrape"}
                date={"January 2020"}
                details={
                  "Created at HackDavis with the purpose of helping college students find off-campus housing"
                }
                tech={silhouScrape}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                projectName={"Portfolio"}
                date={"February 2021"}
                details={
                  "This portfolio was made with the intent to help myself learn React.js while creating something fun"
                }
                tech={portfolio}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                projectName={"Sankofa"}
                date={"February 2021"}
                details={
                  "Developed the recorded sessions page for Sankofa as a part of #include Davis' winter quarter project"
                }
                tech={sankofa}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <ProjectCard
                projectName={"ZoomInsights"}
                date={"January 2021"}
                details={
                  "A webapp that helps instructors evaluate student engagement and confusion by processing Zoom meeting chatlogs"
                }
                tech={zoomInsights}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                projectName={"ANC"}
                date={"October 2020"}
                details={
                  "Developed the Community Members page for the Autism and Neurodiversity Community at UC Davis as a part of #include Davis' fall quarter project"
                }
                tech={anc}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
