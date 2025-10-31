// eslint-disable-next-line react/prop-types
const HamburgerMenu = ({ clicked, setClicked }) => {
  const handleClick = () => setClicked(false);
  return (
    <div
      className={`top-0 right-0 w-5/6 sm:w-1/3 lg:w-1/4 bg-[#141a46] flex justify-center items-center text-white fixed h-full z-40  ease-in-out duration-1000 ${
        clicked ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <div className=" flex flex-col gap-8 font-Bellota ">
        <a href="#intro" onClick={handleClick}>
          Home
        </a>
        <a href="#about" onClick={handleClick}>
          About
        </a>
        <a href="#technologies" onClick={handleClick}>
          Technologies
        </a>
        <a href="#projects" onClick={handleClick}>
          Projects
        </a>
        {/* <a href="#testimonials" onClick={handleClick}>
          Testimonials
        </a> */}
        <a href="#contact" onClick={handleClick}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
