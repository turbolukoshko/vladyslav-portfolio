import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Welcome } from "./components/Welcome/Welcome";

function App() {
  return (
    <main className="main">
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
