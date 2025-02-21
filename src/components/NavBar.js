import Logo from "@/components/Logo";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  PinterestIcon,
  SunnyIcon,
  TwitterIcon,
} from "./icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300  dark:bg-light
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light"
    >
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        {/* <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="articles" title="Articles" className="ml-4" /> */}
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com/BLaNk88352545"
          target={"_blank"}
          whileHover={{ y: -3 }}
          className="w-5 mx-4"
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/Biplope"
          target={"_blank"}
          whileHover={{ y: -3 }}
          className="w-8 mx-4"
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/biplope-maharjan-2a7a27226/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          className="w-8 mx-4"
          whileT4p={{ scale: 0.9 }}
        >
          <LinkedinIcon />
        </motion.a>
        <motion.a
          href="https://www.pinterest.com/biplopem/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          className="w-8 mx-4"
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com"
          target={"_blank"}
          whileHover={{ y: -3 }}
          className="w-8 mx-4"
          whileTap={{ scale: 0.9 }}
        >
          <DribbbleIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunnyIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
