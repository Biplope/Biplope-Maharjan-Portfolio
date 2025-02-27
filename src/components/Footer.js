import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light">
      <Layout className="px-32 py-8 flex items-center justify-between  dark:text-light">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className="flex items-center  dark:text-light">
          Build with <span className="text-primary text-2xl px-1">&#9825;</span>
          by &nbsp;
          <Link
            href="maharjanbiplope16@gmail.com"
            className="underline underline-offset-2  dark:text-light"
          >
            Biplope Maharjan
          </Link>
        </div>
        <Link
          href="maharjanbiplope16@gmail.com"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
