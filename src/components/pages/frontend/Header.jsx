import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <header className="bg-myred">
          <div className="container">
            <div className="flex justify-between items-center p-5">
              <div className="logo flex justify-between items-center gap-5">
                <div className="flex gap-5">
                  <img
                    className="cursor-pointer"
                    src={`${imgPath}/not-sure-logo.png`}
                    alt="philippines"
                  />
                  <img
                    className="cursor-pointer"
                    src={`${imgPath}/red-cross-logo.png`}
                    alt="red-cross-logo"
                  />
                </div>
                <h5 className="text-white text-xl font-normal">
                  Phillipine Red Cross - San Pablo City Chapter
                </h5>
              </div>
              <nav>
                <ul className="navi flex gap-10 text-body text-[18px]">
                  <li>
                    <NavLink>Avail Blood</NavLink>
                  </li>
                  <li>
                    <NavLink>Blood Donation Drive</NavLink>
                  </li>
                  <li>
                    <NavLink>About Us</NavLink>
                  </li>
                </ul>
              </nav>
              <button className="text-white text-sm tracking-wider border border-white p-4 rounded-md hover:text-black hover:bg-white transition-all">
                DONATE NOW
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
