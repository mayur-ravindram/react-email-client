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
      <div className="flex flex-col overflow-hidden">
        {/* list of mails */}
        <ul className="m-10 space-y-2">
          <Link to={`${url}/1`}>
            <li className="shadow-lg p-3 rounded-sm">
              <div className="flex space-x-2">
                <img src="" alt="me" className="h-10 w-10 rounded-full" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-sm">New project brief</h1>
                  <h1 className="font-semibold text-sm opacity-60">
                    Mayur Ravindra
                  </h1>
                </div>
              </div>
              <div className="text-sm mt-2 h-16 opacity-60 overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ratione quam atque sapiente, nesciunt minus
                repellendus esse sequi iste cupiditate, tempora saepe odit
                dolores voluptatem officia similique tempore quia
                accusamus?Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Unde, consequuntur.
              </div>
              <div className="mt-2 flex justify-center items-center bg-red-500 h-4 w-4 rounded-full">
                <span className="text-white">!</span>
              </div>
            </li>
          </Link>
          <Link to={`${url}/2`}>
          <li className="shadow-lg p-3 rounded-sm">
            <div className="flex space-x-2">
              <img src="" alt="me" className="h-10 w-10 rounded-full" />
              <div className="flex flex-col">
                <h1 className="font-bold text-sm">Please give my Tesla back</h1>
                <h1 className="font-semibold text-sm opacity-60">Elon Musk</h1>
              </div>
            </div>
            <div className="text-sm mt-2 h-16 opacity-60 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ratione quam atque sapiente, nesciunt minus repellendus esse sequi
              iste cupiditate, tempora saepe odit dolores voluptatem officia
              similique tempore quia accusamus?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Unde, consequuntur.
            </div>
            <div className="mt-2 flex space-x-1">
              <i className="fa fa-car text-red-400"></i>
              <i className="fa fa-battery-full text-green-400"></i>
            </div>
          </li>
          </Link>
          <li className="shadow-lg p-3 rounded-sm">
            <div className="flex space-x-2">
              <img src="" alt="me" className="h-10 w-10 rounded-full" />
              <div className="flex flex-col">
                <h1 className="font-bold text-sm">Lunch today?</h1>
                <h1 className="font-semibold text-sm opacity-60">Cleopatra</h1>
              </div>
            </div>
            <div className="text-sm mt-2 h-16 opacity-60 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ratione quam atque sapiente, nesciunt minus repellendus esse sequi
              iste cupiditate, tempora saepe odit dolores voluptatem officia
              similique tempore quia accusamus?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Unde, consequuntur.
            </div>
            <div className="mt-2 flex justify-center items-center bg-red-500 h-4 w-4 rounded-full">
              <span className="text-white">!</span>
            </div>
          </li>
          <li className="shadow-lg p-3 rounded-sm">
            <div className="flex space-x-2">
              <img src="" alt="me" className="h-10 w-10 rounded-full" />
              <div className="flex flex-col">
                <h1 className="font-bold text-sm">It's Howdy time</h1>
                <h1 className="font-semibold text-sm opacity-60">
                  Harshad Mehta
                </h1>
              </div>
            </div>
            <div className="text-sm mt-2 h-16 opacity-60 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ratione quam atque sapiente, nesciunt minus repellendus esse sequi
              iste cupiditate, tempora saepe odit dolores voluptatem officia
              similique tempore quia accusamus?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Unde, consequuntur.
            </div>
            <div className="mt-2 flex space-x-1">
              <i className="fa fa-beer"></i>
              <i className="fa fa-cat text-yellow-500"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MailList;
