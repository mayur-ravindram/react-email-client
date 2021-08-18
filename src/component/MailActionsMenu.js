import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MailActionsMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar(currentState) {
    setSidebarOpen(!currentState);
  }
  return (
    <>
      {/* navigation side pane */}
      <div className="flex flex-col rounded-xl p-2"></div>
      <div
        className={`bg-white sm:flex sm:flex-col sm:h-auto sm:relative sm:m-0 sm:w-1/3 sm:bg-gray-200 sm:rounded-l-xl shadow-lg`}
      >
        {/* new message button */}
        <div
          className={`sm:content sm:m-2 sm:bg-transparent sm:rounded-none md:flex md:justify-center md:items-center ${
            sidebarOpen ? "hidden" : "block"
          }`}
        >
          <Link
            to="/"
            className="sm:p-2 sm:bg-blue-700 sm:w-full text-center text-white font-semibold rounded-lg"
          >
            <span className="hidden sm:contents sm:text-xs md:text-base">
              Create
            </span>
            <span className="absolute right-8 bottom-20 p-2 w-16 h-16 flex justify-center items-center rounded-full bg-blue-700 text-xl sm:hidden">
              +
            </span>
          </Link>
        </div>

        {/* menu regular screen*/}
        <div className="hidden space-x-2 sm:m-2 sm:flex sm:flex-col">
          <ul className="flex space-x-2 text-2xl sm:text-base sm:space-y-6 sm:flex sm:flex-col">
            <li>
              <NavLink
                to="/inbox"
                activeStyle={{
                  fontWeight: "bold",
                  color: "tomato",
                }}
                className="font-semibold text-gray-400 focus:outline-none"
              >
                <div className="flex justify-around sm:justify-around sm:items-center">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-inbox"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-inbox"></i>
                    </span>
                    <span className="hidden md:inline">Inbox</span>
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
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around sm:justify-around sm:items-center">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-clock"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-clock"></i>
                    </span>
                    <span className="hidden md:inline">Drafts</span>
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
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around sm:justify-around sm:items-center">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-check-circle"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-check-circle"></i>
                    </span>
                    <span className="hidden md:inline">Sent</span>
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
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around sm:justify-around sm:items-center">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-sign-out-alt"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-sign-out-alt"></i>
                    </span>
                    <span className="hidden md:inline">Outbox</span>
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
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around sm:justify-around sm:items-center">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-archive"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-archive"></i>
                    </span>
                    <span className="hidden md:inline">Archive</span>
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
                }}
                className="font-semibold text-gray-400"
              >
                <div className="flex justify-around sm:justify-around sm:items-center">
                  <div className="space-x-5 w-1/2">
                    <span className="sm:hidden">
                      <i className="fa fa-trash"></i>
                    </span>
                    <span className="hidden sm:contents">
                      <i className="fa fa-trash"></i>
                    </span>
                    <span className="hidden md:inline">Trash</span>
                  </div>
                  <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          name="toggleButtonOne"
          onClick={() => toggleSidebar(sidebarOpen)}
          className={`flex justify-center items-center rounded-full hover:text-blue-700 w-16 h-16 mx-2 sm:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${sidebarOpen ? "" : "block"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* menu responsive */}
        <div
          className={`h-screen w-2/3 absolute inset-y-0 left-0 transform transition duration-700 ease-in-out bg-gray-50 shadow-xl ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full "
          } sm:hidden `}
        >
          <div className="flex justify-between items-start mt-16 mx-4">
            <div className="space-x-2 m-2 flex">
              <ul className="flex flex-col text-base space-y-6">
                <li>
                  <NavLink
                    to="/inbox"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "tomato",
                    }}
                    className="font-semibold text-gray-400"
                  >
                    <div className="flex justify-around items-center">
                      <div className="space-x-8">
                        <span>
                          <i className="fa fa-inbox"></i>
                        </span>
                        <span className="text-black">Inbox</span>
                      </div>
                      <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white">
                        {1}
                      </span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/drafts"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "tomato",
                    }}
                    className="font-semibold text-gray-400"
                  >
                    <div className="flex justify-around items-center">
                      <div className="space-x-8">
                        <span>
                          <i className="fa fa-clock"></i>
                        </span>
                        <span className="text-black">Drafts</span>
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
                    }}
                    className="font-semibold text-gray-400"
                  >
                    <div className="flex justify-around items-center">
                      <div className="space-x-8">
                        <span>
                          <i className="fa fa-check-circle"></i>
                        </span>
                        <span className="text-black">Sent</span>
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
                    }}
                    className="font-semibold text-gray-400"
                  >
                    <div className="flex justify-between items-center">
                      <div className="space-x-6">
                        <span>
                          <i className="fa fa-sign-out-alt"></i>
                        </span>
                        <span className="text-black">Outbox</span>
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
                    }}
                    className="font-semibold text-gray-400"
                  >
                    <div className="flex justify-around items-center">
                      <div className="space-x-6">
                        <span>
                          <i className="fa fa-archive"></i>
                        </span>
                        <span className="text-black">Archive</span>
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
                    }}
                    className="font-semibold text-gray-400"
                  >
                    <div className="flex justify-around items-center">
                      <div className="space-x-6">
                        <span>
                          <i className="fa fa-trash"></i>
                        </span>
                        <span className="text-black">Trash</span>
                      </div>
                      <span className="p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                    </div>
                  </NavLink>
                </li>
              </ul>

              <button
                name="toggleButtonOne"
                onClick={() => toggleSidebar(sidebarOpen)}
                className={`flex justify-end items-start rounded-full hover:text-blue-700 w-16 h-16 mx-2 sm:hidden`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${sidebarOpen ? "block" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* end of navigation sidepane  */}
      </div>
    </>
  );
};

export default MailActionsMenu;
