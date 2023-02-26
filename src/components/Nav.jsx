import React from "react";
import navIcon from "../assets/nav-icon-home.svg";
import { BiSearchAlt } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";
import { Routes, Route, Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import Homepage from "./Homepage";
import CreateDocument from "./CreateDocument";
import ViewDocument from "./ViewDocument";

const Nav = () => {
  return (
    <>
      <div className="bg-[#66A7A3] flex place-items-center justify-between px-8">
        <Link to="/">
          <img src={navIcon} alt="" />
        </Link>
        <div className="relative flex w-1/3">
          <input
            type="text"
            className="px-6 h-10 border-none outline-0 w-full rounded-lg shadow-lg"
            placeholder="Search..."
          />
          <span className="absolute right-2 top-1">
            <BiSearchAlt className=" text-slate-600 h-8 w-8" />
          </span>
        </div>

        <ul className="flex place-items-center justify-self-end gap-x-3">
          <li>
            <span>
              <IoMdNotifications className=" text-white h-6 w-6" />
            </span>
          </li>
          <li>
            <span>
              <RxAvatar className=" text-white h-12 w-12" />
            </span>
          </li>
          <li className="flex justify-center items-center text-white gap-4 cursor-pointer">
            <span>Paul Leandro Lanot</span>
            <span>
              <BsChevronDown />
            </span>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-document" element={<CreateDocument />} />
        <Route path="/view-document" element={<ViewDocument />} />
      </Routes>
    </>
  );
};

export default Nav;
