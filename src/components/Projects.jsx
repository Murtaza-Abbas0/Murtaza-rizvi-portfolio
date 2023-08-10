import React, { useState } from "react";

import SmartSnD from "../assets/Images/Projects/SmartSnD.png";
import IMOKCooking from "../assets/Images/Projects/IMOKCooking.jpg";
import UltraFitness from "../assets/Images/Projects/UltraFitness.png";

const Projects = () => {
  const [addDiv, setAddDiv] = useState(false);
  const [projectId, setProjectId] = useState("");

  const projectsData = [
    {
      id: 1,
      image: SmartSnD,
      name: "Smart SnD",
      link: "https://github.com/Murtaza-Abbas0/SmartSndPublic.git",
    },
    {
      id: 2,
      image: IMOKCooking,
      name: "IMOK Cooking",
      link: "https://play.google.com/store/apps/details?id=com.imokcooking",
    },
    {
      id: 3,
      image: UltraFitness,
      name: "Ultra SV Fitness",
      link: "https://play.google.com/store/apps/details?id=com.ultrafitness",
    },
    // {
    //   id: 4,
    //   image: ExerciseTracker,
    //   name: "Exercise Tracker App",
    //   link: "https://exercise-tracker-aq.netlify.app/",
    // },
    // {
    //   id: 5,
    //   image: ExerciseTracker,
    //   name: "Exercise Tracker App",
    //   link: "https://exercise-tracker-aq.netlify.app/",
    // },
  ];

  return (
    <div id="projects" className=" pt-20">
      <h1 className=" text-center my-6 font-fredoka font-bold text-4xl">
        Projects
      </h1>
      <div className=" sm:w-2/3 transition-all flex flex-wrap gap-8 justify-center p-5 mx-auto ">
        {projectsData.map((data) => (
          <div
            key={data.id}
            className=" relative h-60 w-60  rounded-lg p-2 shadow-lg bg-gray-300 "
            onMouseEnter={() => {
              setAddDiv(true);
              setProjectId(data.id);
            }}
            onMouseLeave={() => setAddDiv(false)}
          >
            <img
              src={data.image}
              className=" h-full w-full rounded-md object-contain object-center p-4"
            />
            {/* {addDiv && projectId === data.id && (
              <a
                href={data.link}
                target="_blank"
                className=" opacity-95 absolute top-0 left-0 font-fredoka font-medium bg-[#141a46] text-white flex justify-center items-center h-full w-full rounded-md p-2"
              >
                {data.name}
              </a>
            )} */}

            <a
              href={data.link}
              target="_blank"
              className={` ${
                addDiv && projectId === data.id ? `opacity-95` : `opacity-0`
              } transition duration-500  absolute top-0 left-0 font-fredoka font-medium bg-[#141a46] text-white flex justify-center items-center h-full w-full rounded-md p-2`}
            >
              {data.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
