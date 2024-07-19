import { FC } from "react";
import skills from "../../../data/skills.json";

import "./Skills.scss";

export const Skills: FC = (): JSX.Element => {
  return (
    <div className="skills">
      <ul className="skills__list">
        <li className="skills__list-item">
          <span className="skills__list-item-title">Languages: </span>
          {skills.languages}
        </li>
        <li className="skills__list-item">
          <span className="skills__list-item-title">Libraries: </span>
          {skills.libraries}
        </li>
        <li className="skills__list-item">
          <span className="skills__list-item-title">Technologies: </span>
          {skills.technologies}
        </li>
        <li className="skills__list-item">
          <span className="skills__list-item-title">Tools: </span>
          {skills.tools}
        </li>
        <li className="skills__list-item">
          <span className="skills__list-item-title">Methodologies: </span>
          {skills.methodologies}
        </li>
      </ul>
    </div>
  );
};
