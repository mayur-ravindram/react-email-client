import React from "react";
import { Link, NavLink } from "react-router-dom";

const MailActionsMenu = () => {
  return (
    <>
      {/* navigation side pane */}
      <div className="p-2 w-1/3 bg-gray-100 rounded-l-xl">
        {/* new message button */}
        <div className="flex justify-center items-center p-10">
          <Link
            to="/"
            className="p-2 bg-blue-700 w-full text-center text-white font-semibold rounded-lg"
          >
            New Message
          </Link>
        </div>
        {/* menu */}
        <div className="flex flex-col">
          <ul className="space-y-6">
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
                    <span className="">
                      <i className="fa fa-inbox"></i>
                    </span>
                    <span>Inbox</span>
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
                    <span>
                      <i className="fa fa-clock"></i>
                    </span>
                    <span>Drafts</span>
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
                    <span>
                      <i className="fa fa-check-circle"></i>
                    </span>
                    <span>Sent</span>
                  </div>
                  <span className="bg-transparent p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
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
                    <span>
                      <i className="fa fa-sign-out-alt"></i>
                    </span>
                    <span>Outbox</span>
                  </div>
                  <span className="bg-transparent p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
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
                    <span>
                      <i className="fa fa-archive"></i>
                    </span>
                    <span>Archive</span>
                  </div>
                  <span className="bg-transparent p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
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
                    <span>
                      <i className="fa fa-trash"></i>
                    </span>
                    <span>Trash</span>
                  </div>
                  <span className="bg-transparent p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* separator */}
        <div className="flex justify-center items-center">
          <hr className="bg-gray-700 opacity-20 h-0.5 mt-10 w-full" />
        </div>

        {/* tags */}
        {/* work in progress */}
        <div className="flex flex-col p-10 space-y-7">
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
        </div>
        {/* end of navigation sidepane  */}
      </div>
    </>
  );
};

export default MailActionsMenu;
