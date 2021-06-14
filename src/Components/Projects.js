import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "SilhouScrape",
    date: "January 2020",
    longDesc: "Created at HackDavis 2020 with the purpose of helping college students find off-campus housing",
    techArr: ["Python", "UiPath"]
  },
  {
    name: "Portfolio",
    date: "June 2021",
    longDesc: "This website was created to showcase my projects and experiences.",
    techArr: ["React.js", "CSS"]
  },
  {
    name: "Sankofa Recorded Sessions Page",
    date: "February 2021",
    longDesc: "I developed the recorded sessions page for Sankofa as a part of #include Davis' winter quarter project",
    techArr: ["React.js", "CSS"]
  },
  {
    name: "ZoomInsights",
    date: "January 2021",
    longDesc: "A webapp that helps instructors evaluate student engagement and confusion by processing Zoom meeting chatlogs",
    techArr: ["React.js", "CSS", "NodeJS", "Firebase"]
  }
]

export default function Projects() {
  const arr = [];
  const renderProjects = () => {
    projects.forEach(e => {
      arr.push(<ProjectCard name={e.name} date={e.date} longDesc={e.longDesc} techArr={e.techArr}/>)
    })
    return arr;
  }
  return(
    <div className={styles.container}>
      {renderProjects()}
    </div>
  )
}