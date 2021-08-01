import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const MailList = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="m-4">
        <h1 className="text-2xl font-bold uppercase">{path.substring(1)}</h1>
      </div>
      {/* this is list of mails */}
      <div className="flex flex-col justify-start">
        <Link to={`${url}/1`}>
          <div className="flex shadow-md">
            <div className="m-2 flex flex-col justify-around">
              {/* <img src="" alt="email sender avatar" /> */}
              <div className="h-10 w-10 rounded-full bg-gray-400 flex justify-center text-2xl text-white">
                AB
              </div>
            </div>
            <div className="m-2">
              <h1 className="text-xl">email sender name</h1>
              <h2 className="text-lg">email subject line</h2>
              <h3 className="text-sm">email content clipped...</h3>
            </div>
          </div>
        </Link>
        <Link to={`${url}/2`}>
          <div className="flex shadow-md">
            <div className="m-2 flex flex-col justify-around">
              {/* <img src="" alt="email sender avatar" /> */}
              <div className="h-10 w-10 rounded-full bg-gray-400 flex justify-center text-2xl text-white">
                AB
              </div>
            </div>
            <div className="m-2">
              <h1 className="text-xl">email sender name</h1>
              <h2 className="text-lg">email subject line</h2>
              <h3 className="text-sm">email content clipped...</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MailList;
