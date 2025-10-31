/* eslint-disable react/no-unescaped-entities */
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
        <p className="font-light sm:text-start text-lg sm:text-xl md:text-2xl my-2">
          Hi, this is <b className="font-bold">Murtaza Rizvi</b>, a Software
          Engineer who loves creating user-friendly apps. I'm skilled in using{" "}
          <b className="font-bold">React Hooks</b> and{" "}
          <b className="font-bold">Redux Toolkit</b> to manage app states
          efficiently. I enjoy writing reliable test cases using{" "}
          <b className="font-bold">Jest</b> to ensure everything works smoothly.
          I have a knack for solving tough problems and turning them into
          simple, elegant solutions. From planning to publishing, I'm committed
          to delivering top-notch apps on the
          <b className="font-bold"> Google Play Store</b>. I also have hands-on
          experience with
          <b className="font-bold"> Firebase</b> and API integrations. Let’s
          work together on something awesome.
        </p>
      </div>
    </div>
  );
};

export default WhoAmI;
