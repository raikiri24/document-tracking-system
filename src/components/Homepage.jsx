import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLibraryAdd, MdPictureAsPdf, MdOutlineNavigateNext } from 'react-icons/md';
import { AiFillNotification, AiOutlineDashboard } from 'react-icons/ai';
import { IoDocumentsSharp } from 'react-icons/io5';
import { TbGps } from 'react-icons/tb';
import { GoSettings } from 'react-icons/go';
import { HiOutlineUsers } from 'react-icons/hi';
import { GiHouseKeys } from 'react-icons/gi';

const Homepage = () => {
  const date = new Date().toDateString();
  const userObj = localStorage.getItem('credential');
  const { email, email_verified, name, picture, given_name } = JSON.parse(userObj);
  console.log(email);
  return (
    <div className="  flex bg-gradient-to-r from-cyan-500 to-[#C00676]">
      <div className="sidenav w-1/4 bg-[#274156] max-md:hidden">
        <div className="w-full h-40 bg-bg-sidenav flex p-10 gap-8 items-center">
          <img src={picture} alt="" className="rounded-full w-16 h-16" />
          <div className="flex flex-col text-white">
            <span className=" text-xl font-bold">{name}</span>
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
          <p className="font-bold text-2xl"> Good morning, {given_name}</p>
        </div>

        <div className="flex mt-24 justify-evenly  max-md:px-4 max-md:items-start max-md:flex-col max-md:gap-2">
          <div className="flex  items-center justify-center max-md:items-left max-md:justify-left">
            <div className="z-10 rounded-full h-24 w-24 bg-gray-500"></div>
            <div className="z-0 rounded-[50px] h-20 w-80 bg-white  m-[-80px] flex justify-between items-center drop-shadow-lg">
              <span className="text-lg font-bold text-slate-500 ml-28">Completed</span>
              <span className=" text-3xl font-bold text-[#00AE50] mr-8">10</span>
            </div>
          </div>
          <div className="flex  items-center justify-center max-md:items-left max-md:justify-left">
            <div className="z-10 rounded-full h-24 w-24 bg-gray-500"></div>
            <div className="z-0 rounded-[50px] h-20 w-80 bg-white  m-[-80px] flex justify-between items-center drop-shadow-lg">
              <span className="text-lg font-bold text-slate-500 ml-28">Ongoing</span>
              <span className=" text-3xl font-bold text-[#ABAE00] mr-8">10</span>
            </div>
          </div>
          <div className="flex  items-center justify-center max-md:items-left max-md:justify-left">
            <div className="z-10 rounded-full h-24 w-24 bg-gray-500"></div>
            <div className="z-0 rounded-[50px] h-20 w-80 bg-white  m-[-80px] flex justify-between items-center drop-shadow-lg">
              <span className="text-lg font-bold text-slate-500 ml-28">Returns</span>
              <span className=" text-3xl font-bold mr-8 text-[#940101]">10</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 max-md:flex-col">
          <div className="p-10 bg-white rounded-lg w-1/2  mt-10 max-md:w-full">
            <h1 className=" font-bold">Documents</h1>
            <ul className="flex items-center flex-col gap-6">
              <li className=" w-full">
                <Link
                  to="/create-document"
                  className="h-20 w-full drop-shadow-lg border-4 border-dotted border-gray-600 flex items-center justify-center rounded-xl ">
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
                      <span className=" font-bold text-sm ">Paul Leandro Lanot</span>
                      <span className="text-xs font-light mb-4">Uploaded Just Now.</span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document">
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
                      <span className=" font-bold text-sm ">Paul Leandro Lanot</span>
                      <span className="text-xs font-light mb-4">Uploaded Just Now.</span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document">
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
                      <span className=" font-bold text-sm ">Paul Leandro Lanot</span>
                      <span className="text-xs font-light mb-4">Uploaded Just Now.</span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document">
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
                      <span className=" font-bold text-sm ">Paul Leandro Lanot</span>
                      <span className="text-xs font-light mb-4">Uploaded Just Now.</span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document">
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
                      <span className=" font-bold text-sm ">Paul Leandro Lanot</span>
                      <span className="text-xs font-light mb-4">Uploaded Just Now.</span>
                    </div>
                    <div className="flex self-end gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <div className=" h-14 border-2 w-14 rounded-full border-black"></div>
                        <span>Pending</span>
                        <Link
                          className="flex cursor-pointer items-center text-xs"
                          to="view-document">
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
            <div className="p-20 bg-white rounded-lg h-full max-md:p-8"></div>
            <div className="p-10 bg-white rounded-lg h-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
