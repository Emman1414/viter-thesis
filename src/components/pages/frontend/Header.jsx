import { imgPath } from "@/components/helpers/functions-general";
import { House, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="fixed top-0 left-0 w-full text-white bg-myred z-50">
      <div className="container">
        <div className="flex justify-between items-center p-4 gap-7">
          {/* Logo */}
          <div className="logo flex justify-between items-center gap-2">
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
              Philippine Red Cross - San Pablo City Chapter
            </h5>
          </div>

          {/* Navigation */}
          <nav
            className={`fixed top-0 right-0 h-full w-full bg-myred text-white transform transition-transform duration-300 ease-in-out ${
              isNavOpen ? "translate-x-0" : "translate-x-full"
            } lg:relative lg:translate-x-0 lg:w-auto lg:h-auto`}
          >
            <div className="flex justify-end p-5 lg:hidden">
              <X className="cursor-pointer size-8" onClick={toggleNav} />
            </div>
            <ul className="flex flex-col lg:flex-row gap-5 text-body text-[18px] items-center justify-center h-full">
              <NavLink to="/" onClick={toggleNav}>
                <House className="hover:text-black p-1 size-8 border border-transparent rounded-full hover:border-white hover:bg-white lg:mr-6 md:mr-0" />
              </NavLink>
              <li>
                <NavLink to="/avail" onClick={toggleNav}>
                  Avail Blood
                </NavLink>
              </li>
              <li>
                <NavLink to="/drive" onClick={toggleNav}>
                  Blood Donation Drive
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleNav}>
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Donate Button */}
          <div className="navi-button hidden lg:block">
            <NavLink to="/donate">
              <button className="text-white text-sm tracking-wider border border-white border-opacity-40 p-4 rounded-md hover:text-black hover:bg-white transition-all">
                DONATE NOW
              </button>
            </NavLink>
          </div>

          {/* Burger Button */}
          <div className="lg:hidden">
            {isNavOpen ? null : (
              <Menu className="cursor-pointer size-8" onClick={toggleNav} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
