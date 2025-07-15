import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Student Absence Management WebApp",
    description: "A web application to track and manage student absences, with admin control and real-time status updates.",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    image: "src\\assets\\sa.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Project Manager WebApp",
    description: "An intuitive project management tool featuring task assignments, timelines, and team collaboration.",
    tags: ["Symfony", "MySQL", "Bootstrap", "JavaScript"],
    image: "src\\assets\\pm.png",
    link: "#"
  },
  {
    id: 3,
    title: "DockStation",
    description: "DockStation is a social media web application inspired by Twitter (still under development), designed for real-time content sharing, engagement, and networking.",
    tags: ["React", "Tailwindcss", "Laravel", "MySQL"],
    image: "src\\assets\\doc.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Reddit Comment Analyzer Data App",
    description: "A data analytics app that fetches and analyzes Reddit comments using NLP techniques to extract sentiment and insights.",
    tags: ["Streamlit", "Python", "Pandas", "NLP", "API"],
    image: "src\\assets\\sl.jpg",
    link: "#"
  }
];
