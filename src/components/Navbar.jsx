"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Button, Dropdown, Label } from "@heroui/react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

let lenis;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el && lenis) {
      lenis.scrollTo(el, {
        offset: -90,
      });
    }

    setActiveSection(id);
  };

  const navItemStyle =
    "cursor-pointer px-3 py-1 rounded-full transition-all duration-300";

  const activeStyle =
    "bg-cyan-500/20 text-cyan-300 shadow-md shadow-cyan-500/20";

  const dropdownItemStyle =
    "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/10 hover:text-cyan-300";

  const isDropdownActive = ["about", "skills"].includes(activeSection);

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="fixed top-3 left-0 w-full z-50 flex justify-center px-2 sm:px-4">
      <div className="flex items-center justify-between w-full max-w-5xl px-3 sm:px-6 py-2 rounded-full glass">
        <div className="cursor-pointer group">
          <div className="relative w-10 h-10 rounded-full">
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <Image
              src={logo}
              alt="logo"
              className="relative w-10 h-10 rounded-full object-cover border shadow-lg group-hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center gap-4 bg-black/30 px-5 py-2 rounded-full">
          <button
            onClick={() => scrollTo("home")}
            className={`${navItemStyle} ${
              activeSection === "home" ? activeStyle : "hover:bg-white/10"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("tech")}
            className={`${navItemStyle} ${
              activeSection === "tech" ? activeStyle : "hover:bg-white/10"
            }`}
          >
            Tech Stack
          </button>

          <button
            onClick={() => scrollTo("qualification")}
            className={`${navItemStyle} ${
              activeSection === "qualification"
                ? activeStyle
                : "hover:bg-white/10"
            }`}
          >
            Qualification
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className={`${navItemStyle} ${
              activeSection === "projects" ? activeStyle : "hover:bg-white/10"
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className={`${navItemStyle} ${
              activeSection === "contact" ? activeStyle : "hover:bg-white/10"
            }`}
          >
            Contact
          </button>

          <Dropdown>
            <Button
              aria-label="Menu"
              className={`${navItemStyle} ${
                activeSection === "more" || isDropdownActive
                  ? activeStyle
                  : "hover:bg-white/10"
              }`}
              onClick={() => setActiveSection("more")}
            >
              More ▾
            </Button>

            <Dropdown.Popover className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-2">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={dropdownVariants}
              >
                <Dropdown.Menu>
                  <Dropdown.Item textValue="About">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 12px rgba(34,211,238,0.3)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      className={dropdownItemStyle}
                    >
                      <Label
                        onClick={() => {
                          scrollTo("about-me");
                          setActiveSection("more");
                        }}
                      >
                        About
                      </Label>
                    </motion.div>
                  </Dropdown.Item>

                  <Dropdown.Item textValue="Skills">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 12px rgba(34,211,238,0.3)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      className={dropdownItemStyle}
                    >
                      <Label
                        onClick={() => {
                          scrollTo("skill");
                          setActiveSection("more");
                        }}
                      >
                        Skills
                      </Label>
                    </motion.div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </motion.ul>
            </Dropdown.Popover>
          </Dropdown>
        </div>

        {/* ================= MOBILE NAV ================= */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => scrollTo("home")}
            className={`${navItemStyle} ${
              activeSection === "home" ? activeStyle : "hover:bg-white/10"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("tech")}
            className={`${navItemStyle} ${
              activeSection === "tech" ? activeStyle : "hover:bg-white/10"
            }`}
          >
            Tech
          </button>

          <Dropdown>
            <Button
              className={`${navItemStyle} ${
                activeSection === "more" ? activeStyle : "hover:bg-white/10"
              }`}
              onClick={() => setActiveSection("more")}
            >
              More ▾
            </Button>

            <Dropdown.Popover className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-2">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={dropdownVariants}
              >
                <Dropdown.Menu>
                  {[
                    ["qualification", "Qualification"],
                    ["projects", "Projects"],
                    ["contact", "Contact"],
                    ["about-me", "About"],
                    ["skill", "Skills"],
                  ].map(([id, label]) => (
                    <Dropdown.Item key={id} textValue={label}>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 12px rgba(34,211,238,0.3)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        className={dropdownItemStyle}
                      >
                        <Label
                          onClick={() => {
                            scrollTo(id);
                            setActiveSection("more"); // ✅ FIX
                          }}
                        >
                          {label}
                        </Label>
                      </motion.div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </motion.ul>
            </Dropdown.Popover>
          </Dropdown>
        </div>

        <div className="relative group cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/40">
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse"></div>

            <div className="text-cyan-300 text-sm group-hover:rotate-180 transition-transform duration-500">
              ✦
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
