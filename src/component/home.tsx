import Lottie from "lottie-react";
import animation from "../../public/assets/rocket.json";
import { motion } from "framer-motion";
import Intro from "./animatedText";
import Earth from "./earth";
function Home() {
  return (
    <div className="bg-img bg-cover overflow-hidden  w-full">
      <div className="flex justify-end items-center h-20 px-20 ">
        <div className="flex text-white font-bold">
          <div className="mx-5 hover:text-blue-400 transition-colors duration-200">
            <a href="#home">Home</a>
          </div>
          
          <div className="mx-5 hover:text-blue-400 transition-colors duration-200">
            <a href="#services">Skill</a>

          </div>
          <div className="mx-5 hover:text-blue-400 transition-colors duration-200">
            <a href="#services">Project</a>
          </div>
        </div>
      </div>
      <div className="h-screen  lg:grid grid-cols-2 ">
        <div className="text-white  lg: p-20">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className="text-white text-4xl font-bold lg:text-6xl "
          >
            <span>Hello, I am Sakriya</span>
          </motion.h1>
          <Intro />
          <div className="mt-5">
            Software Developer with two years of industry experience and three
            months of internship exposure. Proven expertise in designing,
            implementing, testing, and maintaining innovative software
            solutions.
          </div>
          {/* <Lottie animationData={animation} className="w-full lg:h-[50vh] mt-10 pr-[40px] " /> */}

        </div>
        <div className="h-[50vh] lg:h-[40vh] w-full ml-[30px]">
          <Earth/>

        </div>
        
      </div>
    </div>
  );
}

export default Home;
