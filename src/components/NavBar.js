import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import TwitterIcons from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className="h-[1px] inline-block bg-black w-0 absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 flex items-center ">
      <nav className="">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mr-4" />
        <CustomLink href="/articles" title="Articles" className="mr-4" />
      </nav>
      <Link href="/" target={"_blank"}>
        <TwitterIcons />
      </Link>
    </header>
  );
};

export default NavBar;
