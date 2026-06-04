"use client";

import { useEffect, useState } from "react";
import HeroImage from "@/assets/zishan.jpeg";
import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";

const roles = [
  "Web Developer..",
  "Full Stack Developer..",
  "React & Next Developer..",
  "UI Designer..",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setText(roles[index].substring(0, subIndex));
      },
      deleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  // 👉 Messenger config
  const username = process.env.NEXT_PUBLIC_FACEBOOK_USERNAME;

  const message =
    "Hello Atikur, I visited your portfolio and want to connect with you.";

  const messengerURL = `https://www.facebook.com/messages/t/${username}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0B0F1A] text-white flex items-center justify-center px-4 sm:px-6 lg:px-12 py-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <p className="text-gray-400 mb-2 text-sm sm:text-base">Hey, I'm</p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex items-center justify-center md:justify-start gap-2">
            Atikur Rahman
            <span className="wave">👋</span>
          </h1>

          <h2 className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300">
            I am a{" "}
            <span className="text-blue-400 border-r-2 border-blue-400 pr-1">
              {text}
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            🚀 Turning ideas into interactive web experiences <br />
            ✨ Building fast, modern & scalable applications <br />
            💻 Available for freelance projects & collaborations
          </p>

          {/* 👉 Messenger Button */}
          <a
            href={messengerURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 group relative inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-white bg-linear-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
          >
            <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            Message Me
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
          </a>

          {/* Scroll */}
          <div className="mt-5 flex justify-center md:justify-start">
            <div className="scroll-down flex items-center gap-2 cursor-pointer">
              <div className="mouse">
                <div className="wheel"></div>
              </div>

              <span className="text-gray-400 text-xs tracking-widest">
                SCROLL DOWN
              </span>

              <ArrowDown />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative w-fit">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-spin-slow blur-md"></div>

            <Image
              src={HeroImage}
              alt="Hero Image"
              className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full object-cover border-2 border-[#0B0F1A] relative z-10"
            />

            <div className="absolute top-2 -right-20 glass px-4 py-2 rounded-lg text-sm z-20 whitespace-nowrap">
              Full Stack Developer
            </div>

            <div className="absolute bottom-4 -left-20 glass px-4 py-2 rounded-lg text-sm z-20 whitespace-nowrap">
              Available for Freelance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
