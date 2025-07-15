import {  Code, Zap, BrainCircuit, Layers } from "lucide-react";
import type { Skill } from "../types/types";

export const skills: Skill[] = [
  {
    name: "Frontend Development",
    level: 80,
    icon: <Code className="w-6 h-6" />,
    tags: ["React", "Bootstrap", "TailwindCSS", "TypeScript", "JavaScript"]
  },
  {
    name: "Backend Development (REST APIs)",
    level: 90,
    icon: <Zap className="w-6 h-6" />,
    tags: ["Laravel", "Django"]
  },
  {
    name: "Full-Stack Development",
    level: 90,
    icon: <Layers className="w-6 h-6" />,
    tags: ["Laravel", "Django", "Symfony"]
  },
  {
    name: "AI & Data Science",
    level: 85,
    icon: <BrainCircuit className="w-6 h-6" />,
    tags: ["Python", "Pandas", "Streamlit","Scikit-learn", "Power BI"]
  },
];
