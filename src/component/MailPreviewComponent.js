import React from "react";
import { useParams } from "react-router-dom";

export const MailPreviewComponent = () => {
  let { id } = useParams();
  return (
    <>
      <div className="m-3">
        <div className="m-7 flex flex-col">
          <h1>
            Sender_name <b>To</b> Me
          </h1>
          <h3>ID: {id}</h3>
          {/* mail actions options */}
          <div className="mt-10">
            <ul className="flex flex-row space-x-5 justify-end">
              <li className="rounded-sm m-2 h-8 text-center w-32 shadow-sm p-1 border-gray-400 bg-gray-200">
                <span className="mr-2">←</span>reply
              </li>
              <li className="rounded-sm m-2 h-8 text-center w-32 shadow-sm p-1 border-gray-400 bg-gray-200">
                <span className="mr-2">⇇</span>reply all
              </li>
              <li className="rounded-sm m-2 h-8 text-center w-32 shadow-sm p-1 border-gray-400 bg-gray-200">
                <span className="mr-2">→</span>forward
              </li>
              <li className="rounded-sm m-2 h-8 text-center w-32 shadow-sm p-1 border-gray-400 bg-gray-200">
                <span className="mr-2">🚮</span>delete
              </li>
            </ul>
          </div>
          <div className="mt-3 flex justify-between">
            <h1 className="text-3xl">Subject Line</h1>
            <h1 className="text-2xl text-gray-700 opacity-50">Just Now</h1>
          </div>

          {/* mail content goes here */}
          <div className="mt-10">
            <p>
              Dear Mayur Ravindra Mane, Dear Candidate, Greetings from Scoop
              Technologies..!!
            </p>
            <p>
              Hiring for Java Springboot Microservices Or Java, Microservices
              with AWS (5-15Years)
            </p>
            <p>Location : Pan India Job role: Full time with Scoop</p>
            Technologies (C2H) Notice Period : Immediate to 15 Days Interview
            Mode : Video Mode Hiring for 2 positions: Java Springboot
            Microservices Or Java, Microservices with AWS We need immediate or 7
            days joiners with experience between 5 – 15 Yrs .. Note : Kindly
            <p>
              ignore who have more than 15 Days of Notice Period. If you are
              interested please drop in your resume @ rama@scooptechs.com with
              below details. Current Location : Total experience : Relevant
              experience :
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
