"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC,
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.current.reset();

        toast.success("Message sent successfully! 🚀");
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);

        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="text-gray-400 mb-8">
              Have a project or job opportunity? Send me a message anytime.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:atikur.an638@gmail.com"
                className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-xl border border-gray-700 hover:border-cyan-400"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#111827] border border-gray-700 flex items-center justify-center shadow-md">
                  <FaEnvelope className="text-red-500 text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold uppercase tracking-wider">
                    Email
                  </h4>
                  <p className="text-sm text-gray-400">
                    atikur.an638@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/atik12"
                target="_blank"
                className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-xl border border-gray-700 hover:border-cyan-400"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#111827] border border-gray-700 flex items-center justify-center shadow-md">
                  <FaLinkedinIn className="text-blue-500 text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold uppercase tracking-wider">
                    LinkedIn
                  </h4>
                  <p className="text-sm text-gray-400">ATIKUR RAHMAN</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/atikur.rahman206"
                target="_blank"
                className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-xl border border-gray-700 hover:border-cyan-400"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#111827] border border-gray-700 flex items-center justify-center shadow-md">
                  <FaFacebookF className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold uppercase tracking-wider">
                    Facebook
                  </h4>
                  <p className="text-sm text-gray-400">Atikur Rahman Zishan</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-lg space-y-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-[#0f172a] border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-[#0f172a] border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-cyan-400"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-[#0f172a] border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-cyan-400 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-xl hover:bg-cyan-300 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
