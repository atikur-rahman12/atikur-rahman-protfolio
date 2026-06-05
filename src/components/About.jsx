"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  ShieldCheck,
  ServerCog,
  Database,
  Smartphone,
} from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      icon: <MonitorSmartphone size={32} />,
    },
    {
      id: 2,
      title: "Backend & API Development",
      icon: <ServerCog size={32} />,
    },
    {
      id: 3,
      title: "Database Design & Management",
      icon: <Database size={32} />,
    },
    {
      id: 4,
      title: "Authentication & Security",
      icon: <ShieldCheck size={32} />,
    },
    {
      id: 5,
      title: "UI/UX & Responsive Design",
      icon: <Smartphone size={32} />,
    },
  ];

  return (
    <section
      id="about-me"
      className="bg-[#0B0F1A] text-white py-5 px-10 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-linear-to-b from-orange-400 to-pink-500"></div>

          <div className="space-y-14">
            {services.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 relative"
              >
                <span className="absolute left-1.75 w-4 h-4 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50"></span>

                <div className="ml-12 text-gray-200">{item.icon}</div>

                <h3 className="text-xl md:text-2xl font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">About Me</h2>

          <p className="text-gray-300 leading-8 text-lg mb-12 max-w-xl">
            I started my journey in design and photography, where I developed a
            strong eye for detail and creativity. Over time, my passion shifted
            toward software development, where I found joy in building
            real-world applications.
            <br />
            <br />
            Currently, I work with React and Next.js to build modern frontend
            interfaces, along with Node.js, Express, and databases for backend
            systems. I also focus on authentication systems, API development,
            and responsive UI design. My goal is to become a strong full-stack
            developer who builds scalable and impactful web applications.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/1iO-o7_FjL4SG50wteX8Xz2m_kUCbXT4C/view?usp=sharing"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-orange-400 to-pink-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>

              <button className="relative px-8 py-3 bg-[#111827] rounded-xl text-white font-semibold border border-gray-700 backdrop-blur-md">
                📄 Download Resume
              </button>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
