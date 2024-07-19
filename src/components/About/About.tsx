import { FC, useState } from "react";

import { Tab, TabComponent } from "../TabComponent/TabComponent";
import "./About.scss";
import { AboutInfo } from "../AboutInfo/AboutInfo";

export const About: FC = (): JSX.Element => {
  const [tab, setTab] = useState<Tab>("skills");

  const getTabName = (tab: string) =>
    tab.charAt(0).toUpperCase() + tab.slice(1);
  return (
    <div className="about">
      <div className="container">
        <h2 className="about__title">About Me</h2>
        <ul className="about__list">
          {Object.keys(TabComponent).map((tabName) => (
            <li
              key={tabName}
              onClick={() => setTab(tabName as Tab)}
              className={`about__list-item ${tabName === tab ? "active" : ""}`}
            >
              {getTabName(tabName)}
            </li>
          ))}
        </ul>
        <AboutInfo tab={tab} />
      </div>
    </div>
  );
};
