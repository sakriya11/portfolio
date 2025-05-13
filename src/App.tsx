import Home from "./component/home";
import Skill from "./component/skills";
import Projects from "./component/projects";
import Contact from "./component/contact";
import Footer from "./component/footer";
function App() {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide overflow-x-hidden scroll-smooth" >  
      <section id="home">
        <Home />
      </section>
      <section id="skill">
        <Skill />
      </section>
        <section id="project">
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
       <section id="footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
