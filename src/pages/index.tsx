import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import About from "../components/About";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import ContactMe from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <title>Francisco Sotelo - Portfolio</title>
      <meta name="description" content="This is my personal portfolio, hello" />
      <link rel="icon" href="/favicon.ico" />
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
