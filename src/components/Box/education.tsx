import React from "react";

export const Education = () => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            <span className="text-base-content opacity-70">Education</span>
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            <li className="mb-5 ml-4">
              <div
                className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                style={{ left: -4.5 }}
              ></div>
              <div className="my-0.5 text-xs">2015 - 2019</div>
              <h3 className="font-semibold">Degree</h3>
              <div className="mb-4 font-normal">Institution Name</div>
            </li>
            <li className="mb-5 ml-4">
              <div
                className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                style={{ left: -4.5 }}
              ></div>
              <div className="my-0.5 text-xs">2012 - 2014</div>
              <h3 className="font-semibold">Degree</h3>
              <div className="mb-4 font-normal">Institution Name</div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
