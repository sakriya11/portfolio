import { motion } from "framer-motion";

const skillImages = [
  { src: "src/assets/mongo.png", alt: "MongoDB" },
  { src: "src/assets/react.jpg", alt: "React" },
  { src: "src/assets/node.png", alt: "Node.js" },
  { src: "src/assets/my.png", alt: "mysql" },

  { src: "src/assets/js.jpg", alt: "JavaScript" },
  { src: "src/assets/ts.png", alt: "TypeScript" },
  { src: "src/assets/github.png", alt: "github" },
  { src: "src/assets/gitlab.jpg", alt: "gitlab" },
];

function Skills() {
  return (
    <div className="bg-secImg bg-cover overflow-hidden w-full">
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
              <div key={i} className="flex items-center justify-center ">
                <img
                  src={skill.src}
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
