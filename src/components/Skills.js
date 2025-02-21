import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center rounded-full 
        font-semibold bg-dark text-light py-3 px-6 shadow-dark
        cursor-pointer absolute
        dark:bg-light dark:text-dark dark:shadow-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      // viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Education</h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center rounded-full 
        font-semibold bg-dark text-light p-8 shadow-dark
        cursor-pointer dark:bg-light dark:text-dark
         "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-30vw" y="0vw" />
        <Skill name="CSS" x="-6vw" y="-13vw" />
        <Skill name="Javascript" x="28vw" y="6vw" />
        <Skill name="Web Design" x="0vw" y="13vw" />
        <Skill name="Figma" x="-20vw" y="-19vw" />
        <Skill name="Flutter" x="22vw" y="-12vw" />
        <Skill name="Python" x="20vw" y="19vw" />
        <Skill name="Java" x="-20vw" y="19vw" />
      </div>
    </>
  );
};

export default Skills;
