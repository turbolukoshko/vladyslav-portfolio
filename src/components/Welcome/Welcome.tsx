import { FC } from "react";
import profile from "../../assets/profile.jpg";
import "./Welcome.scss";

export const Welcome: FC = (): JSX.Element => {
  return (
    <section className="welcome container">
      <div className="welcome__info">
        <h1 className="welcome__info-title">
          Hi, I'm <span className="welcome__info-title-name">Vladyslav</span>
        </h1>
        <p className="welcome__info-description">
          Front-End Developer with a passion for innovation and collaboration.
          With a track record of delivering exceptional solutions, I specialize
          in leveraging cutting-edge technologies like React.js and Next.js to
          optimize performance and drive business success.
        </p>
      </div>
      <div className="welcome__photo wrapper">
        <img src={profile} alt="profile" className="welcome__photo-img" />
      </div>
    </section>
  );
};
