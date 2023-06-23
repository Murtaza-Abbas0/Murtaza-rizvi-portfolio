import React from "react";
import Title from "./Atoms/Title";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiHome } from "react-icons/hi";

const Footer = () => {
  return (
    <div
      id="contact"
      className={` scroll-smooth pt-20 bg-[#141a46] text-white font-fredoka px-8 py-16 flex justify-start md:justify-around flex-wrap gap-12`}
    >
      <div className=" flex flex-col gap-4">
        <Title />
        <div className=" flex gap-4">
          <a href="https://github.com/Murtaza-Abbas0" target="_blank">
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/murtaza-rizvi-130695210/"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="  flex flex-col gap-4">
        <h1 className=" text-2xl font-semibold">Contact</h1>
        <div className=" flex items-center  gap-3">
          <FaPhoneAlt size={18} />
          <p>+ 92 340 231 0363</p>
        </div>
        <div className=" flex items-center gap-3">
          <MdEmail size={20} />
          <a href="mailto:ak704047@gmail.com">syedmurtazaa9@gmail.com</a>
        </div>
        <div className=" flex items-center gap-3">
          <HiHome size={20} />
          <p>Karachi, Pakistan</p>
        </div>
      </div>
      {/* <div className=" flex flex-col gap-4">
        <h1 className=" text-2xl font-semibold">Projects</h1>
        <a href="https://exercise-tracker-aq.netlify.app/" target="_blank">
          Exercise Tracker App
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
