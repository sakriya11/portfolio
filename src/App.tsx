import Home from "./component/home";
import Skill from "./component/skills";
import Projects from "./component/projects";
function App() {
  return (
    <div >  
      <section id="home">
        <Home />
      </section>
      <section id="skill">
        <Skill />
      </section>
        <section id="skill">
        <Projects/>
      </section>
    </div>
  );
}

export default App;
