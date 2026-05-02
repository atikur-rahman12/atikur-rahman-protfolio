"use client";

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const links1 = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const links2 = [
    { name: "Tech", href: "#tech" },
    { name: "Skills", href: "#skill" },
    { name: "Resume", href: "#" },
    { name: "Qualification", href: "#qualification" },
  ];

  const socials = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/atikur.rahman206",
    },
    { icon: <FaGithub />, link: "https://github.com/atikur-rahman12" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/atik12" },
    { icon: <MdEmail />, link: "mailto:atikur.an638@gmail.com" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);

    if (!el) return;

    if (window.lenis) {
      window.lenis.scrollTo(el, {
        offset: -90,
      });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-white">ATIKUR RAHMAN</h2>
          <p className="mt-3 text-sm text-gray-400">
            Building modern web experiences with Next.js, Tailwind CSS and
            animation.
          </p>

          <div className="flex gap-4 mt-6">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-500"
              >
                <span className="text-gray-300 group-hover:text-white text-sm">
                  {item.icon}
                </span>

                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-blue-500/10 blur-md transition"></span>
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

          <div className="grid grid-cols-2 gap-2 text-sm">
            {[...links1, ...links2].map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="relative hover:text-white transition duration-300 group cursor-pointer"
              >
                {link.name}
                <span className="block h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION (REPLACED) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Availability
          </h3>

          <div className="space-y-3 text-sm text-gray-400">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-green-500 transition">
              <p className="text-white font-medium">🚀 Open for Work</p>
              <p className="text-xs text-gray-400">
                Freelance / Remote / Collaboration projects
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500 transition">
              <p className="text-white font-medium">💡 New Projects</p>
              <p className="text-xs text-gray-400">
                Always excited to build modern web apps
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500 transition">
              <p className="text-white font-medium">⚡ Response Time</p>
              <p className="text-xs text-gray-400">
                Usually reply within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} ATIKUR RAHMAN. All rights reserved.
      </div>
    </footer>
  );
}
