"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import KeenKeeper from "@/assets/keenkeeper.png";
import HireLoop from "@/assets/hireloop.png";
import DocAppoint from "@/assets/docappoint.png";
import DigiTools from "@/assets/DigiTools.png";
// import IssuesTracker from "@/assets/issues.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "HireLoop – Job Hunting Portal",
    tags: [
      "Next JS",
      "Node JS",
      "JavaScript",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
    ],
    description:
      "HireLoop is a full-featured job hunting platform that connects job seekers and recruiters in a seamless ecosystem. It includes role-based dashboards (Seeker, Recruiter, Admin), job posting and application tracking, company management, subscription plans, and analytics. The project is currently in active development and focuses on building a scalable and modern hiring solution.",
    image: HireLoop,
    github: "https://github.com/atikur-rahman12/hireloop-client",
    live: "#",
  },
  {
    title: "DocAppoint – Doctor Appointment Manager",
    tags: ["Next JS", "Node JS", "MongoDB", "Tailwind CSS", "JWT Auth"],
    description:
      "DocAppoint is a full-stack doctor appointment booking system where users can browse doctors, view detailed profiles, and book appointments through a secure authentication system. It includes role-based features for users to manage bookings, update profiles, and handle appointment history. The system is built with a modern UI, responsive design, and focuses on seamless healthcare booking experience.",
    image: DocAppoint,
    github: "https://github.com/atikur-rahman12/doctor-appointment-manager",
    live: "https://doctor-appointment-manager.vercel.app",
  },
  {
    title: "KeenKeeper",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "API"],
    description:
      "KeenKeeper is a thoughtful personal relationship management platform designed to help you keep your most meaningful friendships close and nurtured.It acts as your personal shelf of important connections — allowing you to easily browse, track, and maintain the relationships that matter most in your life. With intelligent insights and gentle reminders, KeenKeeper helps you stay consistent in nurturing your friendships without letting them fade away.",
    image: KeenKeeper,
    github: "https://github.com/atikur-rahman12/my-7th-assignment",
    live: "https://keen-keeper-eight-delta.vercel.app",
  },
  {
    title: "DigiTools",
    tags: ["React JS", "Tailwind CSS", "JavaScript", "API", "Version Control"],
    description:
      "DigiTools is a modern all-in-one digital platform that provides premium AI-powered tools, design assets, templates, and productivity software in a single place. Designed to supercharge your digital workflow, DigiTools helps freelancers, designers, marketers, and creators work faster and more efficiently. With a sleek, dark-themed interface and intuitive user experience, users can easily explore and access high-quality AI tools and resources to boost their productivity and creativity.",
    image: DigiTools,
    github: "https://github.com/atikur-rahman12/my-6th-assignment",
    live: "https://digi-tools-beta.vercel.app",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[#071827] text-white py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
            Projects
          </h2>
          <div className="w-0.5 h-14 bg-[#ff6b57] mx-auto mt-4 relative">
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[#ff6b57] text-xl">
              •
            </span>
          </div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                <div className="absolute inset-0 border border-[#1b3a52] translate-x-3 translate-y-3 rounded-md"></div>
                <div className="relative overflow-hidden rounded-md border border-[#163247] bg-[#0b2235]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-55 sm:h-70 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-xs sm:text-sm rounded-full bg-[#0f2435] text-gray-300 border border-[#1d3447]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm sm:text-base leading-7 max-w-xl mb-8">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 bg-[#ff6b57] hover:bg-[#ff7f6d] text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <FaGithub size={18} />
                    View Github
                  </a>

                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white border-b border-[#35556f] hover:border-[#ff6b57] pb-1 text-sm sm:text-base transition-all duration-300 relative group"
                    >
                      View project
                      <ExternalLink size={16} />
                      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#ff6b57] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-red-400 border-b border-red-400 pb-1 text-sm sm:text-base opacity-80 cursor-not-allowed">
                      Project In Development | Coming Soon
                      <ExternalLink size={16} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
