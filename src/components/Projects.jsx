import { useState } from "react";

import FortuneMetals from "../assets/Images/Projects/FortuneMetals.png";
import KnmDriver from "../assets/Images/Projects/KnmDriver.png";
import SeHealth from "../assets/Images/Projects/SeHealth.png";
import Siat from "../assets/Images/Projects/shiatoolkit.png";
import Xhunt from "../assets/Images/Projects/xhunt.png";
import Ditto from "../assets/Images/Projects/ditto.png";

const Projects = () => {
  const [addDiv, setAddDiv] = useState(false);
  const [projectId, setProjectId] = useState("");

  const projectsData = [
    {
      id: 1,
      image: Siat,
      name: "Shia Toolkit (1M+ Downloads)",
      link: "https://play.google.com/store/apps/details?id=anywheresoftware.b4a.SIAToolKit&hl=en"
    },
    {
      id: 2,
      image: Ditto,
      name: "Ditto - A Reason to Connect",
      link: "https://apps.apple.com/us/app/ditto-a-reason-to-connect/id6742817217"
    },
    {
      id: 3,
      image: FortuneMetals,
      name: "Fortune Metals",
      link: "https://apps.apple.com/pk/app/fortune-metals/id6472907676"
    },
    {
      id: 4,
      image: KnmDriver,
      name: "KNM (Driver Tracking)",
      link: "https://apps.apple.com/us/app/knm-driver/id6736992016"
    },
    {
      id: 5,
      image: SeHealth,
      name: "Saint Elizebeth",
      link: "https://sehc.com/"
    },
    {
      id: 6,
      image: Xhunt,
      name: "XHUNT™",
      link: "https://play.google.com/store/apps/details?id=com.xhunt&hl=en"
    },
    

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
              rel="noreferrer"
              className={`${addDiv && projectId === data.id ? "opacity-95" : "opacity-0"
                } transition duration-500 absolute top-0 left-0 
  font-fredoka font-medium 
  bg-[#141a46] text-white 
  flex justify-center items-center 
  h-full w-full rounded-lg
  text-center px-3 leading-snug break-words`}
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
