import { motion } from "framer-motion";
import Intro from "./animatedText";
import Earth from "./earth";

function Home() {
  return (
    <div
      className="relative h-screen overflow-hidden bg-[url('/assets/bg.jpg')] bg-cover w-full"
      id="home"
    >
      {/* Navigation */}
      <div className="flex justify-end items-center h-20 px-20">
        <div className="flex text-white font-bold">
          <div className="mx-5 hover:text-blue-400 transition-colors duration-200">
            <a href="#home">Home</a>
          </div>
          <div className="mx-5 hover:text-blue-400 transition-colors duration-200">
            <a href="#skill">Skill</a>
          </div>
          <div className="mx-5 hover:text-blue-400 transition-colors duration-200">
            <a href="#project">Project</a>
          </div>
          <div className="mx-5 hover:text-blue-400 transition-colors duration-200">
            <a href="#contact">Connect</a>
          </div>
        </div>
        <button
          className="lg:relative w-[150px] h-[50px] border border-white rounded-[10px] overflow-hidden group transition-all duration-500 z-[1]"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sakriya-khadka-74b9432b1/")
          }
        >
          <span className="absolute top-0 left-[-10px] w-0 h-full bg-white transform skew-x-[15deg] transition-all duration-500 z-[-1] group-hover:w-[58%]" />
          <span className="absolute top-0 right-[-10px] w-0 h-full bg-[#5a189a] transform skew-x-[15deg] transition-all duration-500 z-[-1] group-hover:w-[58%]" />
          <span className="relative text-white text-[18px] transition-colors duration-300 group-hover:text-[#e0aaff]">
            Linkedin
          </span>
        </button>
      </div>

      {/* Hero Content */}
      <div className="h-[calc(100vh-5rem)] lg:grid grid-cols-2">
        <div className="text-white p-20">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className="text-white text-4xl font-bold lg:text-6xl"
          >
            <span>Hello, I am Sakriya</span>
          </motion.h1>
          <Intro />
          <div className="mt-5">
            Software Developer with three years of industry experience. Proven
            expertise in designing, implementing, testing, and maintaining
            innovative software solutions.
          </div>
          <div className="mt-10">
            <button
              className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>
              <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                <span className="select-none">Let's connect</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                ></svg>
              </div>
            </button>
          </div>
        </div>

        <div className="h-[50vh] lg:h-[40vh] w-full ml-[30px]">
          <Earth />
        </div>
      </div>

      {/* Scroll Down Indicator (Tailwind-only scroll-hide effect) */}
      <div className="flex flex-col items-center absolute bottom-6 left-1/2 -translate-x-1/2 text-white z-50 pointer-events-none">
        <span className="w-10 h-20 border-[3px] border-gray-400/90 rounded-2xl flex items-center justify-center">
          <span className="w-5 h-5 rounded-full bg-gradient-to-b from-gray-400/90 to-gray-500 animate-scrolling13"></span>
        </span>
        <span className="text-sm mt-2 opacity-70">Scroll Down</span>
      </div>
    </div>
  );
}

export default Home;
