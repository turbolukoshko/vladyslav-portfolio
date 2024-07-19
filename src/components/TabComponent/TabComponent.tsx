import { Education } from "../Education/Education";
import { Experience } from "../Experience/Experience";
import { Skills } from "../Skills/Skills";

export type Tab = "skills" | "experience" | "education";

export const TabComponent: Record<Tab, JSX.Element> = {
  skills: <Skills />,
  experience: <Experience />,
  education: <Education />,
};
