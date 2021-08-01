import React from "react";
import { Link } from "react-router-dom";

const MailActionsMenu = () => {
  return (
    <>
      {/* navigation side pane */}
      <div className="p-2 w-2/4 bg-gray-200 rounded-bl-lg">
        {/* new message button */}
        <div className="flex justify-center items-center p-10">
          <button className="p-2 bg-blue-700 w-full text-center text-white font-semibold rounded-lg">
            New Message
          </button>
        </div>
        {/* menu */}
        <div className="flex flex-col">
          <ul className="space-y-6">
            <li>
              <Link to="/inbox">
                <div className="flex justify-around font-semibold text-sm">
                  <div className="space-x-5">
                    <span className="text-gray-600">
                      <i className="fa fa-inbox"></i>
                    </span>
                    <span>Inbox</span>
                  </div>
                  <span className="bg-blue-800 p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white">
                    7
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/outbox">
                <div className="flex justify-around font-semibold text-sm opacity-50">
                  <div className="space-x-5">
                    <span className="text-gray-400">
                      <i className="fa fa-star"></i>
                    </span>
                    <span>Outbox</span>
                  </div>
                  <span className="bg-transparent p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/drafts">
                <div className="flex justify-around font-semibold text-sm opacity-50">
                  <div className="space-x-5">
                    <span className="text-gray-400">
                      <i className="fa fa-clock"></i>
                    </span>
                    <span>Drafts</span>
                  </div>
                  <span className="bg-yellow-500 p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white">
                    2
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/trash">
                <div className="flex justify-around font-semibold text-sm opacity-50">
                  <div className="space-x-5">
                    <span className="text-gray-400">
                      <i className="fa fa-trash"></i>
                    </span>
                    <span>Trash</span>
                  </div>
                  <span className="bg-transparent p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/archive">
                <div className="flex justify-around font-semibold text-sm opacity-50">
                  <div className="space-x-5">
                    <span className="text-gray-400">
                      <i className="fa fa-archive"></i>
                    </span>
                    <span>Archive</span>
                  </div>
                  <span className="bg-transparent p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <div className="flex justify-around font-semibold text-sm opacity-50">
                  <div className="space-x-5">
                    <span className="text-gray-400">
                      <i className="fa fa-wrench"></i>
                    </span>
                    <span>Settings</span>
                  </div>
                  <span className="bg-transparent p-1 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white"></span>
                </div>
              </Link>
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
          <div className="flex justify-start items-center">
            <div className="h-6 w-6 rounded-full border-4 border-blue-700 flex justify-center items-center">
              <div className="bg-transparent h-4 w-2 rounded-full"></div>
            </div>
            <span className="ml-10 text-gray-700 font-semibold text-lg opacity-80">
              Work & Enquiries
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
