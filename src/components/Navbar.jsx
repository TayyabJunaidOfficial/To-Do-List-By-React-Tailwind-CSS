import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center text-white bg-violet-600 py-2">
        <div>
          <span>
            <a href="#" className="text-2xl mx-5 font-bold">iTask</a>
          </span>
        </div>
        <div>
          <ul className="flex gap-5 mx-5">
            <li>
              <a href="#" className="cursor-pointer transition hover:font-bold">Home</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer transition hover:font-bold">Your Todo's</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
