import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center py-8">
        <Layout>
          <span>Rights</span>
          <Link href="./">CodeBucks</Link>
          <Link href="./">Hello</Link>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
