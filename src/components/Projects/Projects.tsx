import { FC } from "react";
import projects from "../../../data/projects.json";

import "./Project.scss";

export const Projects: FC = (): JSX.Element => {
  return (
    <section className="projects container">
      <h3 className="projects__title">Projects</h3>
      <ul className="projects__list">
        {projects.map((project) => (
          <li className="projects__list-item" key={project.name}>
            <div className="projects__list-item-img">
              <img src={project.img} />
            </div>
            <div className="projects__list-item-header">
              <p className="projects__list-item-header-name">{project.name}</p>
              <p className="projects__list-item-header-description">
                {project.description}
              </p>
            </div>
            <div className="projects__list-item-links">
              {project.view && (
                <a
                  href={project.view}
                  target="_blank"
                  className="projects__list-item-link margin-right"
                >
                  View
                </a>
              )}
              <a
                href={project.url}
                target="_blank"
                className="projects__list-item-link"
              >
                Github
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="projects__link">
        <a
          href="https://github.com/turbolukoshko?tab=repositories"
          target="_blank"
          className="projects__list-item-link"
        >
          Get more with GitHub
        </a>
      </div>
    </section>
  );
};
