import React from "react";

const HamburgerIcon = ({ clicked, setClicked }) => {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-[#141a46] transition ease transform duration-700`;

  return (
    <button
      className="flex flex-col h-12 w-12 rounded justify-center items-center group"
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={`${genericHamburgerLine} ${
          clicked
            ? "rotate-45 bg-white translate-y-3  group-hover:opacity-100"
            : " group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          clicked ? "opacity-0" : " group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          clicked
            ? "-rotate-45 bg-white -translate-y-3  group-hover:opacity-100"
            : " group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default HamburgerIcon;
