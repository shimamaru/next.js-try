import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import profilePic from "../../public/images/profile/developer-pic-1.png";

import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { LinkArrow } from "../components/Icons";
import HireMe from "../components/HireMe";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div className="flex items-center justify-center w-full mb-10 ">
            <div className="flex items-center justify-center w-1/2">
              <Image
                src={profilePic}
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-center self-center justify-center w-1/2 text-left ">
              <AnimatedText className="!text-4xl text-left" />
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start justify-between mt-2">
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center justify-center w-32 h-12 px-2 py-1 mt-4 mr-4 text-black bg-white border-2 rounded-md font-smbold hover:bg-gray-200 "
                >
                  Contact
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="/"
                  target={"_blank"}
                  className="flex items-center justify-center w-32 h-12 px-2 py-1 mt-4 text-white bg-black rounded-md font-smbold hover:bg-gray-800 "
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
          <HireMe />
        </Layout>
      </main>
    </>
  );
}
