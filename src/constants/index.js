import {ecom,portfolioIcon} from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    motion,
    mui,
    nextjs,
    react,
    redux,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: '',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: '',
    }
];
export const projects = [
    {
      name: "E-commerce Platform",
      icon: ecom,
      description: "Developed a responsive e-commerce platform using React, Next.js, and Tailwind CSS with Wix headless CMS. Features include dynamic product listings, search, filtering, a custom slider, and a robust cart system. Integrated user authentication, checkout, and server-side actions for seamless data management and user experience...",
      githubLink: "", 
      deployedLink: "", 
      theme: "bg-blue-600",
    },
    {
        name: "3D Portfolio",
        icon:portfolioIcon,
      description: "Developed a dynamic 3D portfolio website utilizing Three.js, showcasing my skills and projects through an immersive and interactive user experience. Integrated complex animations, model handling, and responsive design to create a visually engaging digital showcase.",
      githubLink: "https://github.com/HanzalaKhan07/3d-Portfolio-app", 
      deployedLink: "https://3d-portfolio-app-omega.vercel.app",
      theme: "bg-blue-600",
    },
  ];
