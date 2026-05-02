"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useLenis from "@/lib/lenis";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";

export default function Home() {
  useLenis();

  return (
    <main className="bg-[#0f172a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
