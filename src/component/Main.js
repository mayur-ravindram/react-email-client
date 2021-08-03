import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import MailActionsMenu from "./MailActionsMenu";
import MailList from "./MailList";
import { MailPreviewComponent } from "./MailPreviewComponent";

export const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchMails(setList);
    console.log("email list successfully fetched ☑", list)
  }, [setList]);
  return (
    <>
      <div className="p-2 flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="h-full w-full flex flex-row justify-between p-2">
          {/* sidepane -1  */}
          <MailActionsMenu />

          {/* sidepane -2  */}
          <div className="bg-white w-1/2 flex flex-col">
            <div className="flex flex-col rounded-xl p-2">
              {/* this is input box + search flex */}
              <div className="flex p-2 m-2 bg-white rounded-sm shadow-sm">
                <input
                  type="search"
                  className="w-full h-auto outline-none"
                  placeholder="Search"
                />
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
              <Route
                path="/inbox"
                render={(props) => (
                  <MailList data={list.inbox} className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
                )}
              ></Route>
              <Route path="/drafts">
                <MailList data={list.drafts} className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
              </Route>
              <Route path="/sent">
                <MailList data={list.sent} className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
              </Route>
              <Route path="/outbox">
                <MailList data={list.outbox} className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
              </Route>
              <Route path="/trash">
                <MailList data={list.trash} className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
              </Route>
              <Route path="/archive">
                <MailList data={list.archive} className="flex bg-white w-2/3 rounded-l-3xl -ml-5" />
              </Route>
            </Switch>
          </div>

          <div>
            <div className="w-1"></div>
          </div>

          {/* sidepane -3 */}
          <div className="bg-gray-100 w-full flex flex-col rounded-r-xl">
            <Switch>
              <Route path="/inbox/:id">
                <MailPreviewComponent data={list.inbox} />
              </Route>
              <Route path="/drafts/:id">
                <MailPreviewComponent data={list.drafts} />
              </Route>
              <Route path="/sent/:id">
                <MailPreviewComponent data={list.sent} />
              </Route>
              <Route path="/outbox/:id">
                <MailPreviewComponent data={list.outbox} />
              </Route>
              <Route path="/archive/:id">
                <MailPreviewComponent data={list.archive} />
              </Route>
              <Route path="/trash/:id">
                <MailPreviewComponent data={list.trash} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};
async function fetchMails(setList) {
  await fetch("http://localhost:3001/mails")
    .then((response) => response.json())
    .then((response) => {
      setList(response);
    })
    .catch((err) => console.log(err));
}

