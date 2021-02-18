import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// fix weird spacing between lines of words

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "800px",
  },
  acc: {
    boxShadow: "2px 4px 7px rgba(0, 0, 0, 0.15)",
  },
  accDetails: {
    marginLeft: "5px",
    marginTop: "-35px",
  },
  dt: {
    marginLeft: "5px",
    marginTop: "-30px",
  },
  resp: {
    marginTop: "-15px",
    marginLeft: "15px"
  }
}));

function ExperienceCard(props) {
  const classes = useStyles();
  const responsibilities = props.respon.map((item) => <li>{item}</li>);
  return (
    <div className={classes.root}>
      <Accordion className={classes.acc}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h1>{props.company}</h1>
        </AccordionSummary>
        <AccordionDetails className={classes.dt}>
          <h3>{props.dates}</h3>
        </AccordionDetails>
        <AccordionDetails className={classes.accDetails}>
          <h3>{props.role}</h3>
        </AccordionDetails>
        <AccordionDetails className={classes.accDetails}>
          <Typography>
            <h3>Responsibilities:</h3>
            <div className={classes.resp}>
              {responsibilities}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ExperienceCard;
