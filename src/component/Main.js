import React from "react";
import { Link } from "react-router-dom";
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
          <MailList className="flex flex-col" />
        </div>
        <div>
          <div className="w-1"></div>
        </div>
        {/* this is mail preview section */}
        <div className="bg-white w-full flex flex-col">
          <MailPreviewComponent />
        </div>
      </div>
    </div>
  </>
);
