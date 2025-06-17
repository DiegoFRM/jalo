"use client";
import Form from "@/components/Form";
import React, { useState } from "react";

function MissionCards(missionElement: any) {
  let count: number = 0;
  const [loadForm, setLoadForm] = useState(true);
  const [titleTest, setTitleTest] = useState("");

  console.log(missionElement);
  return (
    <>
      {missionElement.length != 0 ? (
        <div className="rounded-md bg-white p-4 flex flex-col lg:flex-row gap-4 w-full mx-auto mt-10">
          <div className="h-100 w-full lg:m-2 p-4 rounded-md bg-blue-100 text-center overflow-y-auto">
            <h3 className="font-bold text-2xl text-gray-600">
              {loadForm ? "Missions" : titleTest}
            </h3>
            <div className="mt-3 text-gray-500 text-left">
              <ul>
                {missionElement.missionElement.map((mission: any) => (
                  <>
                    {loadForm ? (
                      <li className="mb-4" key={count}>
                        {mission.description}
                        <p>
                          <button
                            disabled={mission.status == "locked" ? true : false}
                            className={`font-bold uppercase text-[12px] p-2 rounded mt-1  drop-shadow-lg ${
                              mission.status == "locked"
                                ? "bg-gray-200 "
                                : "bg-green-200 "
                            } `}
                            onClick={() => {
                              setLoadForm(!loadForm);
                              setTitleTest(mission.title);
                              count++;
                              console.log(loadForm);
                            }}
                          >
                            {mission.status == "locked"
                              ? "Not available"
                              : "Mission start"}
                          </button>
                        </p>
                      </li>
                    ) : (
                      <>
                        <Form dataMission={mission} />
                      </>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-100 w-full lg:m-2 p-4 rounded-md bg-blue-100 text-center">
            <h3 className="font-bold text-2xl text-gray-600">Rewards</h3>
            <p className="mt-10 text-gray-500"></p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default MissionCards;
