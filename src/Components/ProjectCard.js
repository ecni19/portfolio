import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "600px",
  },
  acc: {
    boxShadow: "2px 4px 7px rgba(0, 0, 0, 0.15)",
  }, 
  dt: {
    marginLeft: "5px",
    marginTop: "-30px",
    paddingTop: "8px"
  },
  accDetails: {
    marginLeft: "5px",
    marginTop: "-35px",
  },
  tech: {
    marginTop: "-15px",
    marginLeft: "15px"
  }
}));

function ProjectCard(props) {
  const classes = useStyles();
  const techList = props.tech.map((item) => <li>{item}</li>); // render the array of technologies passed in
  return (
    <div className={classes.root}>
      <Accordion className={classes.acc}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h1>{props.projectName}</h1>
        </AccordionSummary>
        <AccordionDetails className={classes.dt}>
          <h3>{props.date}</h3>
        </AccordionDetails>
        <AccordionDetails className={classes.accDetails}>
          <Typography>{props.details}</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.accDetails}>
          <Typography>
            <h3>Technology Used:</h3>
            <div className={classes.tech}>
              {techList}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ProjectCard;
