import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

export function MailList({ data }) {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="m-4">
        <h1 className="text-2xl font-bold uppercase">{path.substring(1)}</h1>
      </div>
      {/* this is list of mails */}
      <div className="flex flex-col overflow-hidden">
        {/* list of mails */}
        <ul className="m-10 space-y-2">
          {console.log("mail list being iterated", data)}

          {data.map((value, index) => (
            <Link key={index} to={`${url}/${value.id}`}>
              <li key={index} className="shadow-lg p-3 rounded-sm">
                <div key={index} className="flex space-x-2">
                  <img src={value.avatar} alt="me" className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-sm">{value.from}</h1>
                    <h1 className="font-semibold text-sm opacity-60">
                      {value.to}
                    </h1>
                  </div>
                </div>
                <div className="text-sm mt-2 h-16 opacity-60 overflow-hidden">
                  {value.body}
                </div>
                <div className="mt-2 flex justify-center items-center bg-red-500 h-4 w-4 rounded-full">
                  <span className="text-white">!</span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MailList;
