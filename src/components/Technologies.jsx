"use client";

import { motion } from "framer-motion";
import { Atom, GitBranch } from "lucide-react";
import { VscVscode } from "react-icons/vsc";

import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiBetterauth,
  SiGithub,
  SiVercel,
  SiFramer,
  SiJson,
  SiExpress,
  SiMongoose,
  SiRedux,
  SiStripe,
  SiPostman,
  SiHeroui,
  SiJsonwebtokens,
  SiTypescript,
} from "react-icons/si";

export default function Technologies() {
  const techs = [
    {
      name: "JavaScript",
      icon: <SiJavascript size={38} className="text-yellow-400" />,
    },
    {
      name: "TypeScript (Basic)",
      icon: <SiTypescript size={38} className="text-blue-500" />,
    },
    { name: "React", icon: <Atom size={38} className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={38} className="text-white" /> },

    {
      name: "Node.js",
      icon: <SiNodedotjs size={38} className="text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress size={38} className="text-gray-300" />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb size={38} className="text-green-400" />,
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={38} className="text-cyan-400" />,
    },
    {
      name: "HeroUI",
      icon: <SiHeroui size={38} className="text-white" />,
    },

    {
      name: "BetterAuth",
      icon: <SiBetterauth size={38} className="text-white" />,
    },

    {
      name: "Stripe",
      icon: <SiStripe size={38} className="text-indigo-500" />,
    },

    {
      name: "Git",
      icon: <GitBranch size={38} className="text-orange-500" />,
    },

    {
      name: "GitHub",
      icon: <SiGithub size={38} className="text-white" />,
    },

    {
      name: "Vercel",
      icon: <SiVercel size={38} className="text-white" />,
    },

    {
      name: "Framer Motion",
      icon: <SiFramer size={38} className="text-pink-400" />,
    },

    {
      name: "REST API",
      icon: <SiJson size={38} className="text-gray-400" />,
    },
    {
      name: "JWT Authentication",
      icon: <SiJsonwebtokens size={38} className="text-pink-400" />,
    },
    {
      name: "VS Code",
      icon: <VscVscode size={38} className="text-blue-500" />,
    },
  ];

  return (
    <section
      id="tech"
      className="bg-[#0B0F1A] text-white py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Technologies & Tools
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg">
            My Tech Stack
          </p>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-10 gap-x-4 sm:gap-x-6 md:gap-x-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.4, delay: index * 0.05 },
                scale: { duration: 0.4, delay: index * 0.05 },
              }}
              whileHover={{
                y: -10,
                scale: 1.08,
              }}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <motion.div
                whileHover={{
                  boxShadow: "0 0 30px rgba(34,211,238,0.35)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center"
              >
                {tech.icon}
              </motion.div>

              <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-200">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
