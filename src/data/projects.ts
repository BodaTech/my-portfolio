import saImage from "../assets/sa.jpg";
import pmImage from "../assets/pm.png";
import docImage from "../assets/doc.jpg";
import slImage from "../assets/sl.jpg";
import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Student Absence Management WebApp",
    description: "...",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    image: saImage,
    link: "#"
  },
  {
    id: 2,
    title: "Project Manager WebApp",
    description: "...",
    tags: ["Symfony", "MySQL", "Bootstrap", "JavaScript"],
    image: pmImage,
    link: "#"
  },
  {
    id: 3,
    title: "DockStation",
    description: "...",
    tags: ["React", "Tailwindcss", "Laravel", "MySQL"],
    image: docImage,
    link: "#"
  },
  {
    id: 4,
    title: "Reddit Comment Analyzer Data App",
    description: "...",
    tags: ["Streamlit", "Python", "Pandas", "NLP", "API"],
    image: slImage,
    link: "#"
  }
];
