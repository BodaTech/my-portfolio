import saImage from "../assets/sa.jpg";
import pmImage from "../assets/pm.png";
import docImage from "../assets/doc.jpg";
import slImage from "../assets/sl.jpg";
import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Student Absence Management WebApp",
    description: "A web platform to manage and track student absences, featuring real-time reporting and user-friendly dashboards.",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    image: saImage,
    link: "#"
  },
  {
    id: 2,
    title: "Project Manager WebApp",
    description: "A task and project management tool enabling teams to assign roles, monitor progress, and collaborate efficiently.",
    tags: ["Symfony", "MySQL", "Bootstrap", "JavaScript"],
    image: pmImage,
    link: "#"
  },
  {
    id: 3,
    title: "DockStation",
    description: "A modern admin dashboard for managing containerized applications, with responsive design and backend integration.",
    tags: ["React", "Tailwindcss", "Laravel", "MySQL"],
    image: docImage,
    link: "#"
  },
  {
    id: 4,
    title: "Reddit Comment Analyzer Data App",
    description: "An interactive data app for analyzing sentiment and trends in Reddit comments using NLP and visualizations.",
    tags: ["Streamlit", "Python", "Pandas", "NLP", "API"],
    image: slImage,
    link: "#"
  }
];
