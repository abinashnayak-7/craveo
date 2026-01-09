import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="w-full bg-zinc-800 text-white mt-8 px-4 sm:px-6 lg:px-10 py-8
                    flex flex-col items-center"
    >
      <div
        className="w-full flex flex-col md:flex-row
                      justify-between gap-8 md:gap-12"
      >
        {/* Brand Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <span className="text-2xl sm:text-3xl text-orange-500 font-bold">
            Craveo
          </span>
          <p
            className="mt-2 text-xs sm:text-sm font-light text-zinc-400
                        leading-5 sm:leading-6"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia
            facilis laborum doloremque, molestias animi unde voluptates dolore
            sapiente excepturi eligendi suscipit repellendus? Cum molestias
            voluptatibus eius at non
          </p>
          <div className="flex justify-center md:justify-start items-center mt-5 gap-4">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Twitter className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <span className="font-semibold text-md sm:text-md">COMPANY</span>
          <ul
            className="text-xs sm:text-sm text-zinc-400 mt-2
                         leading-6 font-light cursor-pointer"
          >
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <span className="font-semibold text-md sm:text-md">GET IN TOUCH</span>
          <ul
            className="text-xs sm:text-sm text-zinc-400 mt-2
                         leading-6 font-light cursor-pointer"
          >
            <li>+1-212-456-7890</li>
            <li>contact@craveo.com</li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-xs text-zinc-400 text-center">
        Copyright 2026 &copy; Craveo.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
