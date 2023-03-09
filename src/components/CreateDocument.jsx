import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { GrSubtractCircle } from 'react-icons/gr';

const CreateDocument = () => {
  const [addNewApprover, setAddNewApprover] = useState(false);
  const [count, setCount] = useState(0);
  const renderDivs = (c) => {
    const uiItems = [];
    while (c--)
      uiItems.push(
        <div class="flex gap-2">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Jane Doe"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setCount(count + 1);
              setAddNewApprover(true);
            }}>
            <span className="text-2xl">
              <IoMdAddCircle />
            </span>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCount(count + 1);
              setAddNewApprover(true);
            }}>
            <span className="text-2xl">
              <GrSubtractCircle />
            </span>
          </button>
        </div>
      );
    return uiItems;
  };
  return (
    <div className=" flex justify-center max-md:px-4">
      <form action="" className="w-1/3 bg-white p-16 my-10 rounded-lg max-md:w-full">
        <h1 className="text-2xl mb-10">Create Document</h1>
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">PDF File ONLY</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <div class="md:flex md:items-center mb-6 mt-10 ">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name">
              Approvers
            </label>
          </div>
          <div class={`md:w-2/3 flex flex-col gap-2`}>
            <div className="gap-2 flex">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Jane Doe"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCount(count + 1);
                  setAddNewApprover(true);
                }}>
                <span className="text-2xl">
                  <IoMdAddCircle />
                </span>
              </button>
              {count > 0 && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setCount(count + 1);
                    setAddNewApprover(true);
                  }}>
                  <span className="text-2xl">
                    <GrSubtractCircle />
                  </span>
                </button>
              )}
            </div>
            {addNewApprover && renderDivs(count)}
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name">
              Remarks
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Jane Doe"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-10">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDocument;
