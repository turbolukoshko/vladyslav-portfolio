import { FC } from "react";
import education from "../../../data/education.json";

import "./Education.scss";

export const Education: FC = (): JSX.Element => {
  return (
    <div className="education">
      <ul className="education__list">
        {education.map((ed) => (
          <li className="education__list-item">
            <p className="education__list-item-title">{ed.title}</p>
            <p className="education__list-item-university">{ed.university}</p>
            <p className="education__list-item-period">{ed.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
