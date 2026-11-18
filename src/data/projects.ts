import webImg from "@/assets/project-web.jpg";
import brandImg from "@/assets/project-brand.jpg";
import uiuxImg from "@/assets/project-uiux.jpg";
import engImg from "@/assets/project-engineering.jpg";

// Sample showcase entries — replace title, description, category, tech and link
// with real INDRAPROJECTS work. Leave `link` as null to hide the View Project button.
export type Project = {
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  link: string | null;
};

export const PROJECTS: Project[] = [
  {
    title: "Business Website — Project Title",
    description: "Short description of the website project, the goal and the result. Replace with real details.",
    category: "Website Development",
    tech: ["React", "Tailwind CSS"],
    image: webImg,
    link: null,
  },
  {
    title: "Brand Identity — Project Title",
    description: "Short description of the branding work: logo, colours and brand kit. Replace with real details.",
    category: "Logo & Branding",
    tech: ["Illustrator", "Photoshop"],
    image: brandImg,
    link: null,
  },
  {
    title: "App Interface — Project Title",
    description: "Short description of the UI/UX design project and the experience it delivers. Replace with real details.",
    category: "UI/UX Design",
    tech: ["Figma", "Prototyping"],
    image: uiuxImg,
    link: null,
  },
  {
    title: "Engineering Project — Project Title",
    description: "Short description of the final year project, department and technology used. Replace with real details.",
    category: "Final Year Project",
    tech: ["IoT", "Python"],
    image: engImg,
    link: null,
  },
];
