import moment from "moment";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export function MailList({data}) {
  let { path, url } = useRouteMatch();
  const mailType = path.substring(1);

  return (
    <>
      <div className="m-4">
        <h1 className="text-2xl font-bold uppercase">{mailType}</h1>
      </div>
      {/* this is list of mails */}
      <div className="flex flex-col">
        {/* list of mails */}
        <ul className="flex flex-col space-y-2 m-10">
          {data && data.map((value, index) => (
            <Link key={index} to={`${url}/${value.id}`}>
              <li key={index} className={`shadow-lg p-3 rounded-sm border-l-4 ${value.read ? 'border-gray-400' : 'border-blue-400'}`}>
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
                <div className="mt-2 font-semibold text-blue-600 flex items-center space-x-2">
                  <div className="h-2 w-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">{moment(`${value.timestamp}`).format("dddd, MMMM DD")}</span>
                  <span className="text-sm">{moment(`${value.timestamp}`).format("hh:mm a")}</span>
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
