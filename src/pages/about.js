import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import profilepic from "../../assets/aboutme.jpg";
import Experience from "@/components/Experience";

const about = () => {
  return (
    <>
      <Head>
        <title> Biplope Mahrjan | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="p-20">
          <AnimatedText
            text="Tryin' till I can!"
            className="mb-4 text-center"
          />
          <div className="grid w-full grid-cols-5 gap-16">
            <div className="col-span-2 flex flex-col items-start justify-start text-center  dark:text-light">
              <p className="font-medium mt-10 mb-3">
                Hello, I'm Biplope Maharjan I am a passionate and versatile
                creative professional with a diverse skillset spanning web
                development, graphic design and a mobile application developer.
                I thrive on crafting user-centric experiences that are not only
                visually stunning but also technically sound and functionally
                efficient.
              </p>
              <p className="my-4 font-medium">
                I believe that my multifaceted expertise and dedication to
                continuous improvement make me a valuable asset to any team. I'm
                confident that I can bring a unique perspective and a wealth of
                skills to your project, helping you achieve your desired
                outcomes.
              </p>
            </div>

            <div
              className="col-span-3 w-3/4 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light"
            >
              <Image
                src={profilepic}
                alt="Bip"
                className="w-full h-auto rounded-2xl"
              ></Image>
            </div>
          </div>
          <Skills />
          {/* <Experience/> */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
