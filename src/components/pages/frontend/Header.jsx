import { imgPath } from "@/components/helpers/functions-general";
import { House } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (

      <header className="fixed top-0 left-0 w-full text-white bg-myred mb-20 z-50">
        <div className="container">
          <div className="flex justify-between items-center p-4">
            <div className="logo flex justify-between items-center gap-5">
              <div className="flex gap-5">
                <Link to="/">
                  <img
                    className="cursor-pointer w-[50px]"
                    src={`${imgPath}/not-sure-logo.png`}
                    alt="philippines"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="cursor-pointer w-[75px]"
                    src={`${imgPath}/red-cross-logo.png`}
                    alt="red-cross-logo"
                  />
                </Link>
              </div>
              <h5 className="text-white text-xl font-normal">
                Phillipine Red Cross - San Pablo City Chapter
              </h5>
            </div>
            <nav>
              <ul className="navi flex gap-10 text-body text-[18px]">
                <NavLink to="/">
                  <House className="hover:text-black p-1 size-8 border border-transparent rounded-full hover:border-white hover:bg-white" />
                </NavLink>
                <li>
                  <NavLink to="/avail">Avail Blood</NavLink>
                </li>
                <li>
                  <NavLink to="/drive">Blood Donation Drive</NavLink>
                </li>
                <li>
                  <NavLink to="/">About Us</NavLink>
                </li>
              </ul>
            </nav>
            <button className="text-white text-sm tracking-wider border border-white border-opacity-40 p-4 rounded-md hover:text-black hover:bg-white transition-all">
              DONATE NOW
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;
