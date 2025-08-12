import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <img
          src="https://via.placeholder.com/500x500?text=Your+Image"
          alt="Contact"
          className="rounded-2xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <form className="flex flex-col gap-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-transparent border border-gray-500 focus:outline-none focus:border-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-transparent border border-gray-500 focus:outline-none focus:border-blue-500"
          />

          {/* Dropdown */}
          <select
            className="p-3 rounded-md bg-transparent border border-gray-500 focus:outline-none focus:border-blue-500"
            defaultValue=""
          >
            <option value="" disabled>
              Something in mind?
            </option>
            <option value="webdev" className="text-black">
              Web Development
            </option>
            <option value="mobile" className="text-black">
              Mobile Application
            </option>
            <option value="other" className="text-black">
              Others
            </option>
          </select>

          {/* Idea */}
          <textarea
            placeholder="Explain your idea..."
            rows={5}
            className="p-3 rounded-md bg-transparent border border-gray-500 focus:outline-none focus:border-blue-500"
          ></textarea>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
