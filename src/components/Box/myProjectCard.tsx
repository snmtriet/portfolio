/* eslint-disable @next/next/no-img-element */
import React from "react";

export const MyProjectCard = ({ name }: { name: string }) => {
  return (
    <a
      className="card shadow-lg compact bg-base-100 cursor-pointer"
      href="https://example.com"
    >
      <div className="p-8 h-full w-full">
        <div className="flex items-center flex-col">
          <div className="w-full">
            <div className="px-4">
              <div className="text-center w-full">
                <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                  {name}
                </h2>
                <div className="avatar opacity-90">
                  <div className="w-20 h-20 mask mask-squircle">
                    <img
                      src="https://via.placeholder.com/250x250"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <p className="mt-1 text-base-content text-opacity-60 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nunc ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
