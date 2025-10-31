import { useState } from "react";

import FortuneMetals from "../assets/Images/Projects/FortuneMetals.png";
import KnmDriver from "../assets/Images/Projects/KnmDriver.png";
import SeHealth from "../assets/Images/Projects/SeHealth.png";

const Projects = () => {
  const [addDiv, setAddDiv] = useState(false);
  const [projectId, setProjectId] = useState("");

  const projectsData = [
    {
      id: 1,
      image: FortuneMetals,
      name: "Fortune Metals",
      link: "https://apps.apple.com/pk/app/fortune-metals/id6472907676"
    },
    {
      id: 2,
      image: KnmDriver,
      name: "KNM (Driver Tracking)",
      link: "https://apps.apple.com/us/app/knm-driver/id6736992016"
    },
    {
      id: 3,
      image: SeHealth,
      name: "Saint Elizebeth",
      link: "https://sehc.com/"
    }
  ];

  return (
    <div id="projects" className=" pt-20 pb-20">
      <h1 className=" text-center my-6 font-fredoka font-bold text-4xl">
        Projects
      </h1>
      <div className=" sm:w-2/3 transition-all flex flex-wrap gap-16 justify-center p-5 mx-auto ">
        {projectsData.map((data) => (
          <div
            key={data.id}
            className="relative h-48 w-48 rounded-lg shadow-lg bg-gray-300 overflow-hidden"
            onMouseEnter={() => {
              setAddDiv(true);
              setProjectId(data.id);
            }}
            onMouseLeave={() => setAddDiv(false)}
          >
            <img src={data.image} className="h-full w-full object-center" />

            <a
              href={data.link}
              target="_blank"
              className={`${
                addDiv && projectId === data.id ? `opacity-95` : `opacity-0`
              } transition duration-500 absolute top-0 left-0 font-fredoka font-medium bg-[#141a46] text-white flex justify-center items-center h-full w-full rounded-lg`}
              rel="noreferrer"
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
