import Javascript from "../assets/Images/javascript.png";
import ReactJS from "../assets/Images/react.png";
import Firebase from "../assets/Images/Firebase.png";
import Git from "../assets/Images/git.png";
import Redux from "../assets/Images/redux.png";
import Jest from "../assets/Images/jest.png";
import Typescript from "../assets/Images/typescript.png";
import NodeJS from "../assets/Images/nodejs.png";
import MongoDb from "../assets/Images/mongodb.png";
import ExpressJS from "../assets/Images/Expressjs.png";
import NextJS from "../assets/Images/nextjs.png";


const TechStack = () => {
  const techData = [
    {
      id: 1,
      image: Javascript,
      alt: "Javascript-logo",
      name: "Javascript"
    },
    {
      id: 2,
      image: Typescript,
      alt: "Typescript-logo",
      name: "Typescript"
    },
    {
      id: 3,
      image: ReactJS,
      alt: "React-logo",
      name: "React (Native/JS)"
    },
    {
      id: 4,
      image: NextJS,
      alt: "next-js-logo",
      name: "Next.js"
    },
    {
      id: 5,
      image: NodeJS,
      alt: "node-js-logo",
      name: "Node.js"
    },
    {
      id: 6,
      image: ExpressJS,
      alt: "express-js-logo",
      name: "Express.js"
    },

    {
      id: 7,
      image: MongoDb,
      alt: "mongo-db-logo",
      name: "MongoDB"
    },
    {
      id: 8,
      image: Firebase,
      alt: "Firebase-logo",
      name: "Firebase"
    },
    {
      id: 9,
      image: Redux,
      alt: "Redux-logo",
      name: "Redux"
    },
    {
      id: 10,
      image: Jest,
      alt: "Jest-logo",
      name: "Jest"
    },
    {
      id: 11,
      image: Git,
      alt: "Git-logo",
      name: "Git"
    }
  ];

  return (
    <div id="technologies" className=" pt-20 w-full text-[#141a46] p-5">
      <h1 className=" text-center my-6 font-fredoka font-bold text-4xl">
        My Tech Stack
      </h1>
      <div className=" flex flex-wrap justify-center gap-4 p-5  mx-auto">
        {techData.map((data) => (
          <div
            key={data.id}
            className="w-full sm:w-80 lg:w-96 p-3 flex flex-col items-center"
          >
            <img
              src={data.image}
              alt={data.alt}
              className=" bg-blend-multiply object-contain h-32 "
              height={200}
              width={200}
            />
            <h1 className=" my-3 text-3xl font-fredoka font-medium ">
              {data.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
