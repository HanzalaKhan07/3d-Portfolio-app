// src/pages/Projects.jsx
import { Link } from "react-router-dom";
import { projects } from "../constants";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";

const Projects = () => {
  const enhancedProjects = [...projects];

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {enhancedProjects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.icon}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex gap-4">
               <a
  href={project.githubLink}
  className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-md shadow-md bg-blue-600 text-white hover:bg-blue-800 cursor-pointer"
  target="_blank"
  rel="noopener noreferrer"
>
  Source Code
</a>
<a
  href={project.deployedLink}
  className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-md shadow-md bg-blue-600 text-white hover:bg-blue-800 cursor-pointer"
  target="_blank"
  rel="noopener noreferrer"
>
  See Live
</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
