import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className=" flex items-center justify-between py-5 font-medium">
      <NavLink to="/">
        <img src={assets.logo} className="w-40" alt="" />
      </NavLink>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="hidden group-hover:block dropdown-menu absolute right-0 pt-3">
            <div className="flex flex-col gap-2 w-36 bg-slate-100 text-gray-700">
              <p className="cursor-pointer px-5 py-1 hover:bg-slate-400">
                My Profile
              </p>
              <p className="cursor-pointer px-5 py-1 hover:bg-slate-400">
                Orders
              </p>
              <p className="cursor-pointer px-5 py-1 hover:bg-slate-400">
                Log out
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p
            className="absolute right-[-8px] bottom-[-8px] 
          rounded-full bg-slate-600 text-center leading-4 
          text-white p-[1px] w-4 items-center  text-[10px]"
          >
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* sidebarmenu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0 "
        } `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex gap-4 items-center cursor-pointer p-3"
          >
            <img
              src={assets.dropdown_icon}
              className="rotate-180 w-4 "
              alt=""
            />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="py-3 pl-5 border  text-black opacity-90"
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="py-3 pl-5 border  text-black opacity-90"
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="py-3 pl-5 border  text-black opacity-90"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="py-3 pl-5 border  text-black opacity-90"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
