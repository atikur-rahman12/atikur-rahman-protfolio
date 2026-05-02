"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Rocket,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      icon: <MonitorSmartphone size={34} />,
      items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend Development",
      icon: <Database size={34} />,
      items: ["Node.js", "REST API", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "UI / UX Design",
      icon: <Palette size={34} />,
      items: [
        "Responsive Design",
        "Clean UI",
        "Figma",
        "Animations",
        "User Experience",
      ],
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Deployment",
      icon: <Rocket size={34} />,
      items: ["Vercel", "Netlify", "GitHub Actions"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Authentication",
      icon: <ShieldCheck size={34} />,
      items: ["BetterAuth"],
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "Problem Solving",
      icon: <Code2 size={34} />,
      items: [
        "Debugging",
        "Optimization",
        "Clean Code",
        "DSA Basics",
        "Teamwork",
      ],
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <section
      id="skill"
      className="bg-[#050816] text-white py-20 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Skills</h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg">
            What I Can Do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-linear-to-r ${skill.color} flex items-center justify-center mb-5`}
              >
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
