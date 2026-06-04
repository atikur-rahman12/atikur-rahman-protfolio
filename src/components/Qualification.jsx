"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, CalendarDays, MapPin } from "lucide-react";

export default function Qualification() {
  const qualifications = [
    {
      type: "Education",
      title: "SSC (Secondary School Certificate)",
      place: "Tarapasha High School and College",
      year: "2021 - 2023",
      desc: "Completed secondary education with basic foundation in science, math, and general subjects.",
      icon: <GraduationCap size={26} />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      type: "Education",
      title: "Diploma in Computer Engineering",
      place: "Moulvibazar Polytechnic Institute",
      year: "2023 - Present",
      desc: "Learning programming, database management, networking, and software development fundamentals.",
      icon: <GraduationCap size={26} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      type: "Learning",
      title: "Frontend Development",
      place: "Programming Hero",
      year: "Completed (2026)",
      desc: "Learned React.js, Next.js, Tailwind CSS and built multiple responsive projects.",
      icon: <Briefcase size={26} />,
      color: "from-pink-500 to-purple-500",
    },
    {
      type: "Learning",
      title: "Backend Development",
      place: "Programming Hero",
      year: "2026 – Present",
      desc: "Learning Node.js, Express.js, MongoDB, REST APIs and authentication systems.",
      icon: <Briefcase size={26} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "Education",
      title: "Web Development Courses",
      place: "Programming Hero",
      year: "2026 - Present",
      desc: "Completed multiple practical courses focused on MERN stack and full stack development.",
      icon: <GraduationCap size={26} />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="qualification"
      className="bg-[#050816] text-white py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Qualification
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg">
            My Education & Experience
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10"></div>

          <div className="space-y-10">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="w-full md:w-[46%]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl hover:-translate-y-1 transition duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-r ${item.color} flex items-center justify-center`}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-sm text-gray-400">{item.type}</p>
                        <h3 className="text-lg sm:text-xl font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{item.place}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        <span>{item.year}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-7 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/40 border-4 border-[#050816]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
