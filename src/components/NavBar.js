import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 flex items-center ">
      Nav-bar
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">Home</Link>
        <Link href="/projects">Home</Link>
        <Link href="/articles">Home</Link>
      </nav>
      <h2>Logo</h2>
      <Link href="/" target={"_blank"}></Link>
    </header>
  );
};

export default NavBar;
