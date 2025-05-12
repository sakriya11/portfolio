import Home from "./component/home";
import Skill from "./component/skills";
import Projects from "./component/projects";
import Contact from "./component/contact";
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
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
