import React from "react";

const CreateDocument = () => {
  return (
    <div className=" flex justify-center max-md:px-4">
      <form
        action=""
        className="w-1/3 bg-white p-16 mt-10 rounded-lg max-md:w-full"
      >
        <h1 className="text-2xl mb-10">Create Document</h1>
        <div className="grid grid-rows-3 grid-flow-col gap-5  items-center">
          <label htmlFor="">Upload Document:</label>
          <label htmlFor="">Approvers:</label>
          <label htmlFor="">Remarks:</label>
          <div className="flex justify-center items-center">
            <input type="file" name="fileToUpload" id="fileToUpload" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upload
            </button>
          </div>
          <div className="">
            <input type="text" className="w-full h-10 border-b-4 outline-0" />
          </div>
          <div>
            <input type="text" className="w-full h-10  border-b-4 outline-0" />
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
