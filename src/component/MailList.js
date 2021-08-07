import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export function MailList({data}) {
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
          {data && data.inbox.map((value, index) => (
            <Link key={index} to={`${url}/${value.id}`}>
              <li key={index} className="shadow-lg p-3 rounded-sm">
                <div key={index} className="flex space-x-2">
                  <img src={value.emailAvatarUrl} alt="me" className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-sm">{value.emailFrom}</h1>
                    <h1 className="font-semibold text-sm opacity-60">
                      {value.emailTo}
                    </h1>
                  </div>
                </div>
                <div className="text-lg font-bold mt-2 h-12 overflow-hidden">
                  {value.emailSubject}
                </div>
                <div className="mt-2 flex">
                  <span className="text-sm">Received : {value.timestamp}</span>
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
