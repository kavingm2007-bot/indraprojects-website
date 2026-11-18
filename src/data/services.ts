import {
  Compass,
  PenTool,
  Award,
  Cpu,
  Globe,
  UserSquare2,
  Briefcase,
  LayoutTemplate,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  icon: LucideIcon;
  whatWeDo: string;
  features: string[];
  technologies?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "career-guidance",
    number: "01",
    title: "Career Guidance",
    short: "Personal direction for students and freshers choosing the right path in tech and design.",
    icon: Compass,
    whatWeDo:
      "We help students and early professionals understand where their strengths fit in the IT and creative industry, and map out the skills, projects and steps needed to get there.",
    features: [
      "One-to-one career counselling sessions",
      "Skill-gap assessment and learning roadmap",
      "Resume and portfolio review",
      "Interview preparation and mock interviews",
    ],
  },
  {
    slug: "logo-branding",
    number: "02",
    title: "Logo Design & Branding",
    short: "Distinctive logos and complete brand identities that make businesses memorable.",
    icon: PenTool,
    whatWeDo:
      "We design logos and visual identities that capture what your business stands for — from the first concept sketch to a ready-to-use brand kit for print and digital.",
    features: [
      "Custom logo concepts and refinements",
      "Colour palette and typography system",
      "Business cards, letterheads and social media kits",
      "Brand guidelines document",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Canva"],
  },
  {
    slug: "certification-courses",
    number: "03",
    title: "Certification Courses",
    short: "Practical, project-based courses with certificates to strengthen your profile.",
    icon: Award,
    whatWeDo:
      "We run hands-on certification courses focused on in-demand skills, where learners build real work during the course and finish with a certificate of completion.",
    features: [
      "Beginner to advanced learning tracks",
      "Live sessions with practical assignments",
      "Mini projects in every module",
      "Certificate on successful completion",
    ],
    technologies: ["HTML/CSS", "JavaScript", "Python", "React", "UI/UX tools"],
  },
  {
    slug: "final-year-projects",
    number: "04",
    title: "Final Year Projects",
    short: "Guided final year projects for all engineering departments — idea to documentation.",
    icon: Cpu,
    whatWeDo:
      "We guide engineering students from every department through their final year project — choosing a strong idea, building it, and preparing the report and presentation.",
    features: [
      "Projects for CSE, IT, ECE, EEE, Mech, Civil and more",
      "Topic selection and abstract support",
      "Implementation guidance and source files",
      "Report, PPT and viva preparation",
    ],
    technologies: ["Python", "Java", "IoT / Arduino", "Machine Learning", "MATLAB", "Web & Mobile"],
  },
  {
    slug: "website-development",
    number: "05",
    title: "Professional Website Development",
    short: "Fast, modern, responsive websites built to represent your business with confidence.",
    icon: Globe,
    whatWeDo:
      "We plan, design and develop professional websites that look great on every device, load quickly and make it easy for customers to reach you.",
    features: [
      "Custom design aligned with your brand",
      "Responsive layouts for mobile, tablet and desktop",
      "SEO-friendly structure and fast performance",
      "Contact forms, maps and WhatsApp integration",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "WordPress"],
  },
  {
    slug: "portfolio-websites",
    number: "06",
    title: "Portfolio Website Development",
    short: "Personal portfolio sites that showcase your work and help you stand out.",
    icon: UserSquare2,
    whatWeDo:
      "We build elegant personal portfolio websites for students, freelancers and professionals — presenting your projects, skills and story in a way recruiters and clients remember.",
    features: [
      "Personal branding and layout design",
      "Project showcase and resume sections",
      "Custom domain setup",
      "Easy updates as your work grows",
    ],
    technologies: ["React", "Tailwind CSS", "Figma"],
  },
  {
    slug: "internship-programs",
    number: "07",
    title: "Internship Programs",
    short: "Real-world internships where learners work on live tasks and build experience.",
    icon: Briefcase,
    whatWeDo:
      "Our internship programs give students practical exposure to real project work in development and design, with mentoring and an internship certificate at the end.",
    features: [
      "Domain-based internship tracks",
      "Mentored, task-driven learning",
      "Work on practical, industry-style projects",
      "Internship completion certificate",
    ],
    technologies: ["Web Development", "Python", "UI/UX Design", "Digital Branding"],
  },
  {
    slug: "ui-ux-design",
    number: "08",
    title: "UI/UX Design",
    short: "Intuitive, beautiful interfaces for websites and apps, designed around real users.",
    icon: LayoutTemplate,
    whatWeDo:
      "We design user interfaces and experiences that are clear, attractive and easy to use — from user flows and wireframes to polished, developer-ready screens.",
    features: [
      "User research and flow mapping",
      "Wireframes and interactive prototypes",
      "High-fidelity UI design and design systems",
      "Developer handoff with specifications",
    ],
    technologies: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
  },
  {
    slug: "domain-hosting-maintenance",
    number: "09",
    title: "Domain, Hosting & Maintenance",
    short: "Domain registration, reliable hosting and ongoing care to keep your site running.",
    icon: ServerCog,
    whatWeDo:
      "We take care of the technical side of being online — registering your domain, setting up secure hosting, and keeping your website updated, backed up and running smoothly.",
    features: [
      "Domain registration and DNS setup",
      "Hosting setup with SSL security",
      "Regular updates, backups and monitoring",
      "Content changes and technical support",
    ],
    technologies: ["DNS", "SSL", "cPanel", "Cloud Hosting"],
  },
];
