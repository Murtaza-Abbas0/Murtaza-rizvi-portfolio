import React, { useState } from "react";
import OwaisAhmed from "../assets/Images/Testimonials/OwaisAhmed.jpeg";
import Daniyal from "../assets/Images/Testimonials/Daniyal.jpeg";
import Huzaifa from "../assets/Images/Testimonials/Huzaifa.jpeg";
import DanishAmir from "../assets/Images/Testimonials/DanishAmir.jpeg";

const Testimonials = () => {
  const [clicked, setClicked] = useState(true);
  const [clickedId, setClickedId] = useState(1);

  const testimonialData = [
    {
      id: 1,
      image: Huzaifa,
      alt: "testimonial ",
      name: "Huzaifa Ali",
      designation: "Backend Engineer @ VativeApps",
      comment:
        "Murtaza Rizvi is passionate about his career. He have great programming skills and he is really an expert of backend and have done dozens of projects. He is so kind and always ready to help the person in need.",
    },
    {
      id: 2,
      image: DanishAmir,
      alt: "testimonial ",
      name: "Danish Amir",
      designation: "Senior UI/UX Designer @ KahooDigitals",
      comment:
        "There is no better colleague than Murtaza Rizvi. He is one of the most dedicated professionals I’ve worked with and is willing to give extra help whenever you need it. His expertise as a developer is considerable and appreciatable. I highly adore his positive attitude and confidence.",
    },
    {
      id: 3,
      image: OwaisAhmed,
      alt: "testimonial ",
      name: "Owais Ahmed",
      designation: "Node JS Developer @ Tafsol",
      comment:
        "Every plane needs a pilot, and I’m grateful you are ours. It’s amazing to see you manage a bazillion things in a short time. And you do it so efficiently.",
    },
    {
      id: 4,
      image: Daniyal,
      alt: "testimonial ",
      name: "Daniyal",
      designation: "Front End Developer @ KahooDigitals",
      comment:
        "Murtaza Rizvi is our amazing Full Stack Developer at KahooDigitals. His contributions to the business are countless.",
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
                className={` absolute top-0 left-0 h-full w-full bg-transparent rounded-full p-1 ${
                  clicked && clickedId === data.id
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
