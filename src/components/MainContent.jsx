/* eslint-disable react/no-unescaped-entities */
import HeroImage from "../assets/Images/Murtaza-Rizvi.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineArrowDown } from "react-icons/ai";

const MainContent = () => {
  const words = ["Software Engineer", "React/React Native Developer", "Node JS Developer", ];

  return (
    <div
      id="intro"
      className=" pt-20 h-[calc(100vh-h-20)] w-full flex flex-col justify-start"
    >
      <div className=" flex flex-col sm:flex-row items-center ">
        <div className=" w-full h-full p-10 flex items-center  ">
          <img
            src={HeroImage}
            alt="hero-image"
            className=" object-contain rounded-full mx-auto"
            height={500}
            width={500}
          />
        </div>
        <div className=" w-full px-8 font-Bellota flex flex-col justify-center items-center sm:items-start">
          <h2 className=" text-lg sm:text-3xl lg:text-4xl my-4 text-[#141a46]">
            Hi There, I'm
          </h2>
          <h1 className=" text-3xl sm:text-5xl lg:text-7xl font-bold text-[#141a46]">
            Murtaza Rizvi
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium my-6 text-[#ff8e00] h-8">
            <Typewriter words={words} loop={0} />
          </p>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <a href="#about">
          <AiOutlineArrowDown
            size={40}
            className=" cursor-pointer  animate-bounce"
          />
        </a>
      </div>
    </div>
  );
};

export default MainContent;
