/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export const Post = () => {
  return (
    <a href="#" className="card shadow-lg compact bg-base-100 cursor-pointer">
      <div className="p-8 h-full w-full">
        <div className="flex items-center flex-col md:flex-row">
          <div className="avatar mb-5 md:mb-0 opacity-90">
            <div className="w-24 h-24 mask mask-squircle">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--0slTGVvE--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wvimqcc1e22q379ydbmh.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-start px-4">
              <div className="text-center md:text-left w-full">
                <h2 className="font-semibold text-base-content opacity-60">
                  Awesome Shortcuts: navigate to your favorite actions on the
                  websites you love with just one click
                </h2>
                <p className="text-base-content opacity-50 text-xs">
                  7 months ago
                </p>
                <p className="mt-3 text-base-content text-opacity-60 text-sm">
                  Let's introduce a simple productivity extension that has been
                  recently featured on Chrome Web...
                </p>
                <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                  <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                    #javascript
                  </div>
                  <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                    #webdev
                  </div>
                  <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                    #programming
                  </div>
                  <div className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content">
                    #react
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
