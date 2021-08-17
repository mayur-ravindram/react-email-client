import React from "react";
import { useParams } from "react-router-dom";

export const MailPreviewComponent = ({ data }) => {
  let { id } = useParams();

  let message = data.inbox.find((v) => v.id === id);
  return (
    <>
      <div className="flex flex-col w-full bg-white border rounded-r-xl h-full">
        {/* action banner */}
        <div className="hidden m-10 border border-gray-200 bg-gray-50 rounded-lg p-2 text-center font-semibold text-sm opacity-40 text-gray-700">
          Load previous 3 messages. ID: {id}
        </div>

        {/* legend: from x to y */}
        <div className="flex justify-between items-center font-bold text-sm ml-10 mt-10 text-gray-600">
          <div>
            {message.emailFrom}
            <span className="font-normal mx-1">to</span>
            {message.emailTo}
          </div>
          {/* CTA options */}
          <div className="flex justify-end space-x-4 items-baseline m-10">
            <div className="flex justify-center items-center rounded-full h-8 w-8 bg-gray-200 hover:bg-yellow-200">
              <div className="text-center">
                <i className="fa fa-reply"></i>
              </div>
            </div>
            <div className="flex justify-center items-center rounded-full h-8 w-8 bg-gray-200 hover:bg-yellow-400">
              <div className="text-center">
                <i className="fa fa-reply-all"></i>
              </div>
            </div>
            <div className="flex justify-center items-center rounded-full h-8 w-8 bg-gray-200 hover:bg-red-300">
              <div className="text-center">
                <i className="fa fa-trash"></i>
              </div>
            </div>
            <div className="flex justify-center items-center rounded-full h-8 w-8 bg-gray-200 hover:bg-blue-400">
              <div className="text-center">
                <i className="fa fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
        {/* subject line, time and avatar */}
        <div className="m-10 flex justify-between items-center">
          <h1 className="text-3xl font-semibold">{message.emailSubject}</h1>
          <div className="flex space-x-4 items-center">
            <h1 className="text-xl font-thin">Just now</h1>
            <img
              src={`../${message.emailAvatarUrl}`}
              alt="me"
              width="1rem" height="1rem"
              className="rounded-full h-16 w-16 shadow-md"
            />
          </div>
        </div>

        {/* mail content */}
        <div className="m-10 text-gray-800 font-medium text-sm leading-8">
          <pre className="font-semibold">{message.emailBody}</pre>
        </div>
      </div>
    </>
  );
};
