import React from "react";

import HeroImage from "../assets/Images/Murtaza-Rizvi.jpeg";

const WhoAmI = () => {
  return (
    <div
      id="about"
      className=" pt-20 w-full font-Bellota flex flex-col  sm:flex-row-reverse"
    >
      <div className=" flex items-center p-10 sm:w-1/2">
        <img
          src={HeroImage}
          alt="hero-image"
          className=" object-contain rounded-full mx-auto "
          height={500}
          width={500}
        />
      </div>
      <div className=" sm:w-1/2 flex flex-col justify-center sm:items-start p-10 sm:p-16 lg:px-32 text-center text-[#141a46]">
        <h1 className=" text-3xl font-bold sm:text-4xl md:text-5xl my-3">
          Who am I?
        </h1>
        <p className=" font-light sm:text-start text-lg sm:text-xl md:text-2xl my-2">
          Hey! This is Murtaza Rizvi, a aspiring Software Engineer based in
          <b className=" font-bold"> Karachi, Pakistan</b> who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries. I have strong technical skills and an academic background in engineering.
          My passion lies in solving business problems with tailored data and algorithms and communicating complex ideas to non-technical stakeholders. I'm currently working as a<b className=" font-bold"> React Native Developer</b>{" "}
          at <b className=" font-bold"> Kahoo Digitals</b>
        </p>
      </div>
    </div>
  );
};

export default WhoAmI;
