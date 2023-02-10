/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Profile = ({ profile }: any) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        <div className="avatar opacity-90">
          <div className="mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profile?.avatar_url} alt={profile?.name} />
          </div>
        </div>
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            <span className="text-base-content opacity-70">Minh Triet</span>
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            TypeScript | Open Source Enthusiast | JavaScript | React | Node.js
            ⚡
          </div>
        </div>
        <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
          download=""
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};
