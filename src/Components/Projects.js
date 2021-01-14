import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const silhouScrape = [
  "Python",
  "pandas, kmeans, matplotlib, numpy, sklearn",
  "Google Firebase",
  "UiPath",
];
const portfolio = ["React.js", "CSS", "Material-UI"];

function Projects() {
  return (
    <div className="projects-container">
      <ProjectCard
        size={10}
        projectName={"SilhouScrape"}
        date={"January 2020"}
        details={"Created at HackDavis with the purpose of helping college students find off-campus housing"}
        tech={silhouScrape}
      />
      <ProjectCard
        size={10}
        projectName={"Portfolio"}
        date={"December 2020"}
        details={"This portfolio was made with the intent to help myself learn React.js while creating something fun"}
        tech={portfolio}
      />
    </div>
  );
}

export default Projects;
