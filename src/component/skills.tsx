import { motion } from "framer-motion";

// Import images
import mongoImg from '../assets/mongo.png';
import reactImg from '../assets/react.jpg';
import nodeImg from '../assets/node.png';
import mysqlImg from '../assets/my.png';
import jsImg from '../assets/js.jpg';
import tsImg from '../assets/ts.png';
import githubImg from '../assets/github.png';
import gitlabImg from '../assets/gitlab.jpg';

const skillImages = [
  { src: mongoImg, alt: "MongoDB" },
  { src: reactImg, alt: "React" },
  { src: nodeImg, alt: "Node.js" },
  { src: mysqlImg, alt: "MySQL" },
  { src: jsImg, alt: "JavaScript" },
  { src: tsImg, alt: "TypeScript" },
  { src: githubImg, alt: "GitHub" },
  { src: gitlabImg, alt: "GitLab" },
];

function Skills() {
  return (
    <div className="bg-[url('/assets/second.jpg')] bg-cover overflow-hidden w-full">
      <div className="rounded-2xl bg-customeBg w-[85%] h-[70vh] mb-10 mx-auto shadow-2xl p-8 flex flex-col">
        <div className="text-white text-5xl mb-6 text-center">My Skills</div>

        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full mx-auto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            {skillImages.map((skill, i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src={skill.src}  // Now using the imported image
                  alt={skill.alt}
                  className="w-[32%] h-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
