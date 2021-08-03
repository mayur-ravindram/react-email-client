import React from "react";
import { useParams } from "react-router-dom";

export const MailPreviewComponent = ({data}) => {
  let { id } = useParams();
  {data.map((value, index) => {
    if(id == value.id) {
      
    }
  })}

  let message = data.filter((v) => v.id == id)[0];
  console.log(message.id)
  return (
    <>
      <div className="flex flex-col w-full bg-white border rounded-r-xl h-full">
        {/* action banner */}
        <div className=" border m-10 border-gray-300 bg-gray-50 rounded-lg p-2 text-center font-semibold text-sm opacity-40 text-gray-700">
          Load previous 3 messages. ID: {id}
        </div>
        {/* legend: from x to y */}
        <div className="font-bold text-sm ml-10 text-gray-600">
          {message.from}
          <span className="font-normal mx-1">to</span>
          {message.to}
        </div>
        {/* subject line, time and avatar */}
        <div className="m-10 flex justify-between items-center">
          <h1 className="text-3xl font-semibold">{message.subject}</h1>
          <div className="flex space-x-4 items-center">
            <h1 className="text-xl font-thin">Just now</h1>
            <img
              src={message.avatar}
              alt="me"
              className="rounded-full h-16 w-16 shadow-md"
            />
          </div>
        </div>

        {/* mail content */}
        <div className="m-10 text-gray-800 font-medium text-sm leading-8">
          {message.body}

          {/* attachments */}
        
          <div className="space-y-1">
            <div className="mt-10 space-x-3 flex items-center">
              <div className="h-10 w-10 text-center text-gray-500 bg-blue-300 rounded-md">
                <i className="fa fa-paperclip"></i>
              </div>
              <div className="flex flex-col">
                <span>Poject-brief.pdf</span>
                <span className="text-xs font-medium opacity-50">1.02 MB</span>
              </div>
            </div>
            <div className="mt-10 space-x-3 flex items-center">
              <div className="h-10 w-10 text-center text-gray-500 bg-yellow-300 rounded-md">
                <i className="fa fa-paperclip"></i>
              </div>
              <div className="flex flex-col">
                <span>Poject-wireframe.psd</span>
                <span className="text-xs font-medium opacity-50">4.96 MB</span>
              </div>
            </div>
          </div>

          {/* CTA options */}
          <div className="flex justify-end space-x-4 items-baseline">
            <div className="h-8 w-8 border rounded-lg shadow-md">
              <div className="text-center">
                <i className="fa fa-reply"></i>
              </div>
            </div>
            <div className="h-8 w-8 border rounded-lg shadow-md">
              <div className="text-center">
                <i className="fa fa-reply-all"></i>
              </div>
            </div>
            <div className="h-8 w-8 border rounded-lg shadow-md">
              <div className="text-center">
                <i className="fa fa-trash"></i>
              </div>
            </div>
            <div className="h-8 w-8">
              <div className="text-center rounded-lg bg-blue-700 text-white">
                <i className="fa fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
