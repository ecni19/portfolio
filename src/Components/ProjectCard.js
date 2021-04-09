import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./ProjectCard.css";

function ProjectCard(props) {
  const techList = props.tech.map((item) => <li>{item}</li>); // render the array of technologies passed in
  return (
    <div className="root">
      <Accordion style={{borderRadius:"20px", border:'solid #ebebeb 1px'}} className="acc">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h1>{props.projectName}</h1>
        </AccordionSummary>
        <AccordionDetails className="dt">
          <h3>{props.date}</h3>
        </AccordionDetails>
        <AccordionDetails className="accDetails">
          <h3 className="techUsed">{props.details}</h3>
        </AccordionDetails>
        <AccordionDetails className="accDetails">
          <Typography>
            <h3 className="techUsed">Technology Used:</h3>
            <div className="tech">
              <ul>
                {techList}
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ProjectCard;
