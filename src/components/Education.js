import LiIcon from "@/components/LiIcon";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center ">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="
          Secondary Education Examination (SEE)"
            time="-2019"
            place="Thecho,Lalitpur"
            info="This course covers subjects such as science, math, optional math, and HPE."
          />
          <Details
            type="
          +2 Certification"
            time="2020-2022"
            place="Massachusetts Institute Of Technology (MIT)"
            info="A two-year program providing specialized education in streams like Physics, Chemistry, and Biology or Mathematics for Science certification"
          />
          <Details
            type="
          Bachelor Of Science In Computer Science (Hons)"
            time="2023-current"
            place="Dillibazar, Kathmandu"
            info="Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence were all relevant courses."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
