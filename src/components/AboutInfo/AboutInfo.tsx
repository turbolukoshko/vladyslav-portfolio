import { FC } from "react";
import { Tab, TabComponent } from "../TabComponent/TabComponent";

import "./AboutInfo.scss";

type AboutInfoProps = {
  tab: Tab;
};

export const AboutInfo: FC<AboutInfoProps> = ({ tab }): JSX.Element => {
  return (
    <div className="about-info">
      {/* <span className="about-info__symbol">{`>_`}</span> */}
      {TabComponent[tab]}
    </div>
  );
};
