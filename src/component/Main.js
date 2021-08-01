import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MailActionsMenu from "./MailActionsMenu";
import MailList from "./MailList";
import { MailPreviewComponent } from "./MailPreviewComponent";

export const Main = () => (
  <>
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <div className="h-full w-full flex flex-row justify-between p-2">
        {/* sidepane -1  */}
        <MailActionsMenu />

        {/* sidepane -2  */}
        <div className="bg-gray-100 w-1/2 flex flex-col">
          <div className="flex flex-col bg-gray-100 rounded-xl p-2">
            {/* this is input box + search flex */}
            <div className="flex p-2 m-2 bg-white rounded-sm shadow-sm">
              <input type="search" className="w-full h-auto outline-none" placeholder="Search" />
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
              <MailList className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
            </Route>
            <Route path="/drafts">
              <MailList className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
            </Route>
            <Route path="/sent">
              <MailList className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
            </Route>
            <Route path="/outbox">
              <MailList className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
            </Route>
            <Route path="/trash">
              <MailList className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
            </Route>
            <Route path="/archive">
              <MailList className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
            </Route>
          </Switch>
        </div>
        
        <div>
          <div className="w-1"></div>
        </div>

        {/* sidepane -3 */}
        <div className="bg-white w-full flex flex-col">
          <Switch>
            <Route path="/inbox/:id">
              <MailPreviewComponent />
            </Route>
            <Route path="/drafts/:id">
              <MailPreviewComponent />
            </Route>
            <Route path="/sent/:id">
              <MailPreviewComponent />
            </Route>
            <Route path="/outbox/:id">
              <MailPreviewComponent />
            </Route>
            <Route path="/archive/:id">
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
