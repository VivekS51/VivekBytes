import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 md:px-20 py-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Subscribe */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Stay updated with Gaurav</h3>
          <div className="flex bg-neutral-900 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent px-4 py-3 w-full text-sm outline-none"
            />
            <button className="bg-emerald-500 hover:bg-emerald-400 px-4 flex items-center justify-center">
              →
            </button>
          </div>
          <div className="flex gap-3 mt-3">
            <FaFacebookF className="cursor-pointer hover:text-emerald-400" />
            <FaTwitter className="cursor-pointer hover:text-emerald-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-emerald-400" />
            <FaInstagram className="cursor-pointer hover:text-emerald-400" />
            <FaGithub className="cursor-pointer hover:text-emerald-400" />
          </div>
        </div>

        {/* Navigation 1 */}
        <div>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Services</li>
            <li className="hover:text-emerald-400 cursor-pointer">Work</li>
            <li className="hover:text-emerald-400 cursor-pointer">About</li>
            <li className="hover:text-emerald-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Navigation 2 */}
        <div>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Testimonials</li>
            <li className="hover:text-emerald-400 cursor-pointer">Projects</li>
            <li className="hover:text-emerald-400 cursor-pointer">Blog</li>
            <li className="hover:text-emerald-400 cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">India</li>
            <li className="hover:text-emerald-400 cursor-pointer">London</li>
            <li className="hover:text-emerald-400 cursor-pointer">New York</li>
          </ul>
        </div>
      </div>

      {/* Big Name + Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <h1 className="text-6xl font-bangers tracking-wide">Gaurav</h1>


        <p className="mt-4 text-gray-400 italic">
          “Success is when preparation meets opportunity.”
        </p>
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Gaurav. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
