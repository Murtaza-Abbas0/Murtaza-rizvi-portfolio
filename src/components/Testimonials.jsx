import React, { useState } from "react";
import OwaisAhmed from "../assets/Images/Testimonials/OwaisAhmed.jpeg";
import Daniyal from "../assets/Images/Testimonials/Daniyal.jpeg";
import Female_Placeholder from "../assets/Images/Testimonials/Female_Placeholder.png";
import Zaid from "../assets/Images/Testimonials/Zaid.jpg";

const Testimonials = () => {
  const [clicked, setClicked] = useState(true);
  const [clickedId, setClickedId] = useState(1);

  const testimonialData = [
    {
      id: 1,
      image: Zaid,
      alt: "testimonial ",
      name: "Zaid Farooqui",
      designation: "Senior Full Stack Engineer @ Aciano Technologies",
      comment:
        `I wanted to commend you for your exceptional work as a React Native Developer. Your commitment to learning, proactive problem-solving, and attention to detail have made a significant impact on our team. You possess a strong work ethic, collaborate effectively, and consistently deliver high-quality, maintainable code. Your future as a React Native developer looks incredibly promising.

        Keep up the excellent work!
        
        Best regards,`,
    },
    {
      id: 2,
      image: Female_Placeholder,
      alt: "testimonial ",
      name: "Alina Jabeen",
      designation: "Senior Software Engineer (.NET Core) @ Contour Software",
      comment:
        `I had the privilege of collaborating with Murtaza Rizvi on a project. Their expertise in integrating backend and React Native was invaluable. Their clear communication, clean coding, and proactive problem-solving greatly contributed to our success. I highly recommend them to anyone in need of a proficient React Native developer.`,
    },
    {
      id: 3,
      image: Female_Placeholder,
      alt: "testimonial ",
      name: "Zara Rasheed",
      designation: "Software Quality Assurance Engineer @ Digital Landscape",
      comment:
        `Having worked alongside Murtaza Rizvi in the past, I can attest to their exceptional React Native development skills. Their ability to harmoniously integrate backend functionalities with React Native was truly impressive. Throughout our collaboration, their dedication to delivering clean code, coupled with their proactive approach to addressing challenges, greatly contributed to our project's success. As a QA professional, I confidently recommend Murtaza Rizvi to those seeking a proficient and reliable React Native developer.`,
    },
    {
      id: 4,
      image: Daniyal,
      alt: "testimonial ",
      name: "Daniyal",
      designation: "Senior Front End Developer @ KahooDigitals",
      comment:
        `Reflecting on our shared experiences at Kahoo Digitals, I'm compelled to acknowledge Murtaza Rizvi for their exceptional contributions. As a senior front-end developer, I've had the pleasure of witnessing their adeptness in React Native development, seamlessly synchronized with backend intricacies. Their commitment to maintaining a high standard of code quality and their proactive approach to problem-solving have been crucial in driving our projects forward. It's with great enthusiasm that I endorse Murtaza Rizvi to those in search of a proficient and collaborative React Native developer.`,
    },
  ];

  return (
    <div id="testimonials" className=" pt-20">
      <h1 className=" text-center my-6 font-fredoka font-bold text-4xl">
        Testimonials
      </h1>
      <div className=" sm:w-3/4 mx-auto p-10">
        <div className=" flex  items-center justify-around flex-wrap">
          {testimonialData.map((data) => (
            <div key={data.id} className=" relative p-2">
              <div
                onClick={() => {
                  setClicked(true);
                  setClickedId(data.id);
                }}
                className={` absolute top-0 left-0 h-full w-full bg-transparent rounded-full p-1 ${clicked && clickedId === data.id
                    ? ` border-2 border-dashed border-[#141a46] animate-spin duration-700`
                    : ` border-2 border-dashed border-transparent`
                  }`}
              ></div>
              <img
                src={data.image}
                alt={data.alt}
                className={`object-cover object-center rounded-full h-24 w-24 `}
              />
            </div>
          ))}
        </div>
        {testimonialData
          .filter((data) => data.id === clickedId)
          .map((filteredData) => (
            <div key={filteredData.id} className=" font-Bellota my-3">
              <div className=" text-center ">
                <h1 className=" text-xl font-bold mb-2">{filteredData.name}</h1>
                <p className=" text-sm">{filteredData.designation}</p>
              </div>
              <div className=" w-full sm:w-5/6 mx-auto my-6 text-xl bg-[#faf4f5] p-10 rounded-xl">
                {filteredData.comment}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
