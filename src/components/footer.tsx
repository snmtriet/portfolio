import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 footer bg-base-300 text-base-content footer-center">
      <div className="card compact bg-base-100 shadow">
        <div className="card-body">
          <div>
            Made with{" "}
            <a
              className="text-primary"
              href="https://github.com/arifszn/gitprofile"
              target="_blank"
              rel="noreferrer"
            >
              GitProfile
            </a>{" "}
            and ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};
