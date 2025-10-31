import { useState } from "react";
import Title from "./Atoms/Title";
import HamburgerIcon from "./Atoms/HamburgerIcon";
import HamburgerMenu from "./Atoms/HamburgerMenu";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(false);

  return (
    <div className="relative">
      <div
        className={`flex justify-between items-center fixed z-50 w-full h-20 py-3 px-6 sm:px-16 transition ease-in-out duration-1000 ${
          !clicked ? `bg-white` : `bg-[#141a46]`
        }`}
      >
        <Title clicked={clicked} />
        <HamburgerIcon clicked={clicked} setClicked={setClicked} />
      </div>

      <HamburgerMenu clicked={clicked} setClicked={setClicked} />

      <div
        className={` ${
          !clicked ? "hidden" : "fixed"
        }  top-0 left-0 h-screen w-full z-30`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Navbar;
