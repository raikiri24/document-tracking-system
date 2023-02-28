import React from "react";
import { Link } from "react-router-dom";
import {
  MdLibraryAdd,
  MdPictureAsPdf,
  MdOutlineNavigateNext,
} from "react-icons/md";
import { AiFillNotification, AiOutlineDashboard } from "react-icons/ai";
import { IoDocumentsSharp } from "react-icons/io5";
import { TbGps } from "react-icons/tb";
import { GoSettings } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { GiHouseKeys } from "react-icons/gi";
import Calendar from "react-awesome-calendar";
import AvatarImg from "../assets/avatar.jpg";

const Homepage = () => {
  const date = new Date().toDateString();
  return (
    <div className="  flex bg-gradient-to-r from-cyan-500 to-[#C00676]">
      <div className="sidenav w-1/4 bg-[#274156] max-md:hidden">
        <div className="w-full h-40 bg-bg-sidenav flex p-10 gap-8 items-center">
          <img src={AvatarImg} alt="" className="rounded-full w-16 h-16" />
          <div className="flex flex-col text-white">
            <span className=" text-xl font-bold">Paul Leandro Lanot</span>
            <span className=" text-sm">Officer III</span>
          </div>
        </div>
        <ul>
          <li className="w-full flex items-center gap-2 py-3 px-16 text-lg font-bold text-white bg-opacity-10 bg-white">
            <AiOutlineDashboard className="text-2xl" /> Dashboard
          </li>
          <li className="w-full flex items-center gap-2 py-3 px-16 text-lg font-bold text-white">
            <IoDocumentsSharp className="text-2xl" />
            All Documents
          </li>
          <li className="w-full flex items-center gap-2 py-3 px-16 text-lg font-bold text-white">
            <TbGps className="text-2xl" />
            Track Documents
          </li>
        </ul>
        <ul className="mt-8">
          <li className="w-full flex items-center gap-2 py-3 px-8 text-lg font-bold text-white">
            <GoSettings className="text-2xl" />
            Settings
          </li>
          <li className="w-full flex items-center gap-2 py-3 px-16 text-lg font-bold text-white">
            <HiOutlineUsers className="text-2xl" />
            Users
          </li>
          <li className="w-full flex items-center gap-2 py-3 px-16 text-lg font-bold text-white">
            <GiHouseKeys className="text-2xl" />
            Change Password
          </li>
        </ul>
      </div>
      <div className="w-full mt-24  px-36 max-md:px-4 ">
        <div className="flex flex-col items-center text-white ">
          <p className="font-bold  text-sm"> {date}</p>
          <p className="font-bold text-2xl"> Good morning, Paul</p>
        </div>

        <div className="flex mt-24 justify-evenly  max-md:px-4 max-md:items-start max-md:flex-col max-md:gap-2">
          <div className="flex  items-center justify-center max-md:items-left max-md:justify-left">
            <div className="z-10 rounded-full h-24 w-24 bg-gray-500"></div>
            <div className="z-0 rounded-[50px] h-20 w-80 bg-white  m-[-80px] flex justify-between items-center drop-shadow-lg">
              <span className="text-lg font-bold text-slate-500 ml-28">
                Completed
              </span>
              <span className=" text-3xl font-bold text-[#00AE50] mr-8">
                10
              </span>
            </div>
          </div>
          <div className="flex  items-center justify-center max-md:items-left max-md:justify-left">
            <div className="z-10 rounded-full h-24 w-24 bg-gray-500"></div>
            <div className="z-0 rounded-[50px] h-20 w-80 bg-white  m-[-80px] flex justify-between items-center drop-shadow-lg">
              <span className="text-lg font-bold text-slate-500 ml-28">
                Ongoing
              </span>
              <span className=" text-3xl font-bold text-[#ABAE00] mr-8">
                10
              </span>
            </div>
          </div>
          <div className="flex  items-center justify-center max-md:items-left max-md:justify-left">
            <div className="z-10 rounded-full h-24 w-24 bg-gray-500"></div>
            <div className="z-0 rounded-[50px] h-20 w-80 bg-white  m-[-80px] flex justify-between items-center drop-shadow-lg">
              <span className="text-lg font-bold text-slate-500 ml-28">
                Returns
              </span>
              <span className=" text-3xl font-bold mr-8 text-[#940101]">
                10
              </span>
            </div>
          </div>
        </div>

        <nav
          className="mt-10 flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Templates
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Flowbite
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex gap-2 max-md:flex-col">
          <div className="p-10 bg-white rounded-lg w-1/2  mt-10 max-md:w-full">
            <h1 className=" font-bold">Documents</h1>
            <ul className="flex items-center flex-col gap-6">
              <li className=" w-full">
                <Link
                  to="/create-document"
                  className="h-20 w-full drop-shadow-lg border-4 border-dotted border-gray-600 flex items-center justify-center rounded-xl "
                >
                  <MdLibraryAdd className=" text-gray-600 text-4xl" />
                </Link>
              </li>
              <li className="flex items-center w-full gap-3">
                <div className=" w-full drop-shadow-lg bg-slate-200 flex rounded-xl flex-col p-4">
                  <div className="h-full w-16"></div>
                  <div className="flex flex-col">
                    <span className=" font-extrabold flex justify-center items-center gap-2">
                      <MdPictureAsPdf className="h-10 w-10" />
                      Document 1
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col mt-4">
                      <span className=" font-bold text-sm ">
                        Paul Leandro Lanot
                      </span>
                      <span className="text-xs font-light mb-4">
                        Uploaded Just Now.
                      </span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document"
                        >
                          <span>Go to Document</span>
                          <span className=" text-3xl">
                            <MdOutlineNavigateNext />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                  Notify
                  <span>
                    <AiFillNotification />
                  </span>
                </button>
              </li>
              <li className="flex items-center w-full gap-3">
                <div className=" w-full drop-shadow-lg bg-slate-200 flex rounded-xl flex-col p-4">
                  <div className="h-full w-16"></div>
                  <div className="flex flex-col">
                    <span className=" font-extrabold flex justify-center items-center gap-2">
                      <MdPictureAsPdf className="h-10 w-10" />
                      Document 1
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col mt-4">
                      <span className=" font-bold text-sm ">
                        Paul Leandro Lanot
                      </span>
                      <span className="text-xs font-light mb-4">
                        Uploaded Just Now.
                      </span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document"
                        >
                          <span>Go to Document</span>
                          <span className=" text-3xl">
                            <MdOutlineNavigateNext />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                  Notify
                  <span>
                    <AiFillNotification />
                  </span>
                </button>
              </li>
              <li className="flex items-center w-full gap-3">
                <div className=" w-full drop-shadow-lg bg-slate-200 flex rounded-xl flex-col p-4">
                  <div className="h-full w-16"></div>
                  <div className="flex flex-col">
                    <span className=" font-extrabold flex justify-center items-center gap-2">
                      <MdPictureAsPdf className="h-10 w-10" />
                      Document 1
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col mt-4">
                      <span className=" font-bold text-sm ">
                        Paul Leandro Lanot
                      </span>
                      <span className="text-xs font-light mb-4">
                        Uploaded Just Now.
                      </span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document"
                        >
                          <span>Go to Document</span>
                          <span className=" text-3xl">
                            <MdOutlineNavigateNext />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                  Notify
                  <span>
                    <AiFillNotification />
                  </span>
                </button>
              </li>
              <li className="flex items-center w-full gap-3">
                <div className=" w-full drop-shadow-lg bg-slate-200 flex rounded-xl flex-col p-4">
                  <div className="h-full w-16"></div>
                  <div className="flex flex-col">
                    <span className=" font-extrabold flex justify-center items-center gap-2">
                      <MdPictureAsPdf className="h-10 w-10" />
                      Document 1
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col mt-4">
                      <span className=" font-bold text-sm ">
                        Paul Leandro Lanot
                      </span>
                      <span className="text-xs font-light mb-4">
                        Uploaded Just Now.
                      </span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document"
                        >
                          <span>Go to Document</span>
                          <span className=" text-3xl">
                            <MdOutlineNavigateNext />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                  Notify
                  <span>
                    <AiFillNotification />
                  </span>
                </button>
              </li>
              <li className="flex items-center w-full gap-3">
                <div className=" w-full drop-shadow-lg bg-slate-200 flex rounded-xl flex-col p-4">
                  <div className="h-full w-16"></div>
                  <div className="flex flex-col">
                    <span className=" font-extrabold flex justify-center items-center gap-2">
                      <MdPictureAsPdf className="h-10 w-10" />
                      Document 1
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col mt-4">
                      <span className=" font-bold text-sm ">
                        Paul Leandro Lanot
                      </span>
                      <span className="text-xs font-light mb-4">
                        Uploaded Just Now.
                      </span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document"
                        >
                          <span>Go to Document</span>
                          <span className=" text-3xl">
                            <MdOutlineNavigateNext />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                  Notify
                  <span>
                    <AiFillNotification />
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-1/2 mt-10 flex flex-col gap-4 max-md:w-full">
            <div className="p-20 bg-white rounded-lg h-full max-md:p-8">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="p-10 bg-white rounded-lg h-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
