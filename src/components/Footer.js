import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center font-light border-t-2 border-gray-400 border-solid w-fulltext-sm">
        <Layout className="flex items-center w-full py-8 text-center">
          {/* <span>{new Date().getFullYear()} &copy All Rights Reserved</span>
          <Link href="./">CodeBucks</Link> */}
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
