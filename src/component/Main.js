import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MailActionsMenu from "./MailActionsMenu";
import MailList from "./MailList";
import { MailPreviewComponent } from "./MailPreviewComponent";

export const Main = () => (
  <>
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <div className="h-full w-full flex flex-row justify-between p-2">
        <div className="bg-gray-300 w-1/3 flex flex-col">
          <Link
            to="/"
            className="rounded-lg m-5 text-sm 
              bg-blue-800 font-bold h-12 p-2 text-white"
          >
            New Message
          </Link>

          <div className="divide-y-2 bg-gray-400">
            <div className="w-1"></div>
            <div className="w-1"></div>
          </div>

          {/* navigation component */}
          <div className="flex flex-col">
            <MailActionsMenu />
          </div>
        </div>
        <div className="bg-gray-100 w-1/2 flex flex-col">
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
          <Switch>
            <Route path="/inbox">
              <MailList className="flex flex-col" />
            </Route>
            <Route path="/outbox">
              <MailList className="flex flex-col" />
            </Route>
            <Route path="/sent">
              <MailList className="flex flex-col" />
            </Route>
            <Route path="/trash">
              <MailList className="flex flex-col" />
            </Route>
          </Switch>
        </div>
        <div>
          <div className="w-1"></div>
        </div>
        {/* this is mail preview section */}
        <div className="bg-white w-full flex flex-col">
          <Switch>
            <Route path="/inbox/:id">
              <MailPreviewComponent />
            </Route>
            <Route path="/outbox/:id">
              <MailPreviewComponent />
            </Route>
            <Route path="/sent/:id">
              <MailPreviewComponent />
            </Route>
            <Route path="/trash/:id">
              <MailPreviewComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </>
);
