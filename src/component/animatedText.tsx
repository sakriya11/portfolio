import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <h1 className="text-white text-2xl font-bold lg:text-4xl leading-snug">
      <Typewriter
        words={["Welcome to my profile"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={80}
        delaySpeed={2000}
      />
    </h1>
  );
};

export default Intro;
