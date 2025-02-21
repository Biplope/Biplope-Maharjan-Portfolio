import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href=""
        className="w-16 h16 bg-dark text-light 
      flex items-cetner justify-center rounded-full text-xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: ["#121212", "rgb(128,128,128)", "#121212"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        BM
      </MotionLink>
    </div>
  );
};

export default logo;
