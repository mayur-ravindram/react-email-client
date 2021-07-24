import React from "react";

export const MailList = () => (
  <>
    <div className="flex flex-col bg-gray-100 rounded-xl p-2">
      {/* this is input box + search flex */}
      <div className="flex p-2 m-2 bg-white rounded-sm shadow-sm">
        <input type="search" className="w-full h-auto outline-none" />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div className="m-4">
      <h1 className="text-2xl font-bold uppercase">Inbox</h1>
    </div>
    {/* this is list of mails */}
    <div className="flex flex-col justify-start">
      <div className="flex shadow-md">
        <div className="m-2 flex flex-col justify-around">
          {/* <img src="" alt="email sender avatar" /> */}
          <div className="h-10 w-10 rounded-full bg-gray-400 flex justify-center text-2xl text-white">AB</div>
        </div>
        <div className="m-2">
          <h1 className="text-xl">email sender name</h1>
          <h2 className="text-lg">email subject line</h2>
          <h3 className="text-sm">email content clipped...</h3>
        </div>
      </div>
      <div className="flex shadow-md">
        <div className="m-2 flex flex-col justify-around">
          {/* <img src="" alt="email sender avatar" /> */}
          <div className="h-10 w-10 rounded-full bg-gray-400 flex justify-center text-2xl text-white">AB</div>
        </div>
        <div className="m-2">
          <h1 className="text-xl">email sender name</h1>
          <h2 className="text-lg">email subject line</h2>
          <h3 className="text-sm">email content clipped...</h3>
        </div>
      </div>
    </div>
  </>
);

export default MailList;
