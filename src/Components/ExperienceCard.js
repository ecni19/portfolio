import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './ExperienceCard.css';

function ExperienceCard(props) {
  const responsibilities = props.respon.map((item) => <li>{item}</li>);
  return (
    <div className="root">
      <Accordion style={{borderRadius:"20px", border:'solid #ebebeb 1px'}} className="acc">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h1>{props.company}</h1>
        </AccordionSummary>
        <AccordionDetails className="dt">
          <h3>{props.dates}</h3>
        </AccordionDetails>
        <AccordionDetails className="accDetails">
          <h3 className="listTitle">{props.role}</h3>
        </AccordionDetails>
        <AccordionDetails className="accDetails">
          <Typography>
            <h3 className="listTitle">Responsibilities:</h3>
            <div className="resp">
              <ul>
                {responsibilities}
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ExperienceCard;
