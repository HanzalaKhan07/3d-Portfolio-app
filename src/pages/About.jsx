import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { skills } from "../constants"; // Removed experiences import

import "react-vertical-timeline-component/style.min.css";
import { ecom, mindIcon, portfolioIcon } from "../assets/images";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Hanzala
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software developer based in Pakistan, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            As a dedicated software developer, I am continually learning and
            building projects to enhance my skills. Here’s a summary of my
            experience and ongoing projects:
          </p>
        </div>

        <div className="mt-12 flex flex-col">
          <VerticalTimeline>
            <VerticalTimelineElement
              date="Ongoing"
              iconStyle={{ background: "#06b6d4" }} // Example color
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={mindIcon} // Replace with a relevant icon path
                    alt="Self-Learning"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: "#06b6d4", // Example color
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  Self-Taught Developer
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  Continuous Learning
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Mastered React, Next.js, and responsive design through
                  hands-on projects and self-study.
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Currently focusing on backend development and building various
                  projects to enhance skills.
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Applying knowledge to develop full-stack applications with
                  modern web technologies.
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Current"
              iconStyle={{ background: "#06b6d4" }} // Example color
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={ecom}
                    alt="Current Project"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: "#06b6d4", // Example color
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  E-commerce Project
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  Personal Project
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Developing a full-stack e-commerce app with React, Next.js,
                  Tailwind CSS, and Wix Headless CMS.
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Creating dynamic pages for product listings, filters, and
                  detailed views with responsive design.
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Integrating Wix CMS for product data and checkout, with custom
                  server actions and user authentication.
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Implementing features like cart functionalities, reviews,
                  pagination, and state management.
                </li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date="Completed"
              iconStyle={{ background: "#06b6d4" }} // Example color
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={portfolioIcon} // Replace with a relevant icon path
                    alt="Portfolio Project"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: "#06b6d4", // Example color
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  3D Portfolio Website
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  Personal Project
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Creating an engaging 3D portfolio with interactive elements
                  like a floating island and a responsive fox.
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Utilizing Three.js to build and animate the 3D models for an
                  immersive user experience.
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  Showcasing skills and creativity in a visually compelling way
                  to attract potential employers.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
