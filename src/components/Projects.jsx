import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "Project One",
      shortDesc: "A simple React application.",
      details: "This project was built using React and demonstrates component-based design. It includes routing, state management, and API fetching.",
    },
    {
      title: "Project Two",
      shortDesc: "A UI layout using Bootstrap.",
      details: "This project showcases modern UI layouts using Bootstrap 5. It includes a responsive navbar, cards, and grid design.",
    },
    {
      title: "Project Three",
      shortDesc: "API integration demo.",
      details: "This project integrates a public API and displays dynamic data. It demonstrates fetch(), async/await, and error handling.",
    },
  ];

  return (
    <section id="projects">
      <div className="container text-center">
        <h2 className="mb-5">Projects</h2>

        <div className="row">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {selectedProject && (
          <div className="mt-5 p-4 border rounded shadow-sm bg-white text-start">
            <h3>{selectedProject.title}</h3>
            <p className="mt-3">{selectedProject.details}</p>

            <button
              className="btn btn-secondary mt-2"
              onClick={() => setSelectedProject(null)}
            >
              Close Details
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
