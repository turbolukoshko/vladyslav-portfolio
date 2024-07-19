import { FC } from "react";
import experience from "../../../data/experience.json";

import "./Experience.scss";

export const Experience: FC = (): JSX.Element => {
  return (
    <div className="experience">
      <ul className="experience__list">
        {experience.map((ex) => (
          <li className="experience__list-item">
            <p className="experience__list-item-company">
              {ex.title} - {ex.company}
            </p>
            <p className="experience__list-item-period">{ex.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
