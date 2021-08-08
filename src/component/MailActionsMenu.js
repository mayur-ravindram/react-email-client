import React from "react";
import { Link, NavLink } from "react-router-dom";

const MailActionsMenu = () => {
  return (
    <>
      {/* navigation side pane */}
      <div className="p-2 w-full my-5 sm:m-0 sm:w-1/3 bg-gray-100 sm:rounded-l-xl">
        {/* new message button */}
        <div className="absolute right-0 bottom-0 bg-blue-600 m-8 rounded-full sm:m-0 sm:relative sm:bg-transparent sm:rounded-none md:flex md:justify-center md:items-center p-10">
          <Link
            to="/"
            className="sm:p-2 sm:bg-blue-700 sm:w-full text-center text-white font-semibold rounded-lg"
          >
            <span className="hidden md:contents">New Message</span>
            <span className="h-8 w-8 rounded-full bg-red-500"></span>
          </Link>
        </div>

        {/* menu */}
        <div className="flex m-auto justify-around space-x-2 sm:m-2 sm:flex sm:flex-col">
          <ul className="sm:space-y-6 flex sm:inline-block">
            <li>
              <NavLink
                to="/inbox"
                activeStyle={{
                  fontWeight: "bold",
                  color: "tomato",
                  fontSize: "1.125rem",
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-inbox"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-inbox"></i>
                    </span>
                    <span className="hidden sm:inline">Inbox</span>
                  </div>
                  <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/drafts"
                activeStyle={{
                  fontWeight: "bold",
                  color: "tomato",
                  fontSize: "1.125rem",
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-clock"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-clock"></i>
                    </span>
                    <span className="hidden sm:inline">Drafts</span>
                  </div>
                  <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sent"
                activeStyle={{
                  fontWeight: "bold",
                  color: "tomato",
                  fontSize: "1.125rem",
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-check-circle"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-check-circle"></i>
                    </span>
                    <span className="hidden sm:inline">Sent</span>
                  </div>
                  <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/outbox"
                activeStyle={{
                  fontWeight: "bold",
                  color: "tomato",
                  fontSize: "1.125rem",
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-sign-out-alt"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-sign-out-alt"></i>
                    </span>
                    <span className="hidden sm:inline">Outbox</span>
                  </div>
                  <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/archive"
                activeStyle={{
                  fontWeight: "bold",
                  color: "tomato",
                  fontSize: "1.125rem",
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-archive"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-archive"></i>
                    </span>
                    <span className="hidden sm:inline">Archive</span>
                  </div>
                  <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trash"
                activeStyle={{
                  fontWeight: "bold",
                  color: "tomato",
                  fontSize: "1.125rem",
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-trash"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-trash"></i>
                    </span>
                    <span className="hidden sm:inline">Trash</span>
                  </div>
                  <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* separator */}
        {/* <div className="flex justify-center items-center">
          <hr className="bg-gray-700 opacity-20 h-0.5 mt-10 w-full" />
        </div> */}

        {/* tags */}
        {/* work in progress */}
        {/* <div className="flex flex-col p-10 space-y-7">
          <div className="flex">
            <div className="h-6 w-6 rounded-full border-4 border-blue-500 flex justify-center items-center">
              <div className="bg-transparent h-4 w-4 rounded-full"></div>
            </div>
            <span className="ml-10 text-gray-700 font-semibold text-sm opacity-50">
              Work
            </span>
          </div>
          <div className="flex">
            <div className="h-6 w-6 rounded-full border-4 border-yellow-500 flex justify-center items-center">
              <div className="bg-transparent h-4 w-4 rounded-full"></div>
            </div>
            <span className="ml-10 text-gray-700 font-semibold text-sm opacity-50">
              Family
            </span>
          </div>
          <div className="flex">
            <div className="h-6 w-6 rounded-full border-4 border-green-500 flex justify-center items-center">
              <div className="bg-transparent h-4 w-4 rounded-full"></div>
            </div>
            <span className="ml-10 text-gray-700 font-semibold text-sm opacity-50">
              Friends
            </span>
          </div>
          <div className="flex">
            <div className="h-6 w-6 rounded-full border-4 border-red-600 flex justify-center items-center">
              <div className="bg-transparent h-4 w-4 rounded-full"></div>
            </div>
            <span className="ml-10 text-gray-700 font-semibold text-sm opacity-50">
              Clients
            </span>
          </div>
        </div> */}
        {/* end of navigation sidepane  */}
      </div>
    </>
  );
};

export default MailActionsMenu;
