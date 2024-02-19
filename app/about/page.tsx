import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-gray-600 py-6">
        <p className="mb-5 text-8xl text-base-300 text-center">Next Pro</p>
        <p className="text-gray-300 px-5 text-xl text-center">
          A next js project build with Tailwind css and Daisy UI. This project
          is part of the learning you can get it's code from my Github.
        </p>
        <p className="font-bold text-gray-400 px-6 text-xl mt-3">
          Version : <span className="text-white">1.0.0</span>
        </p>
        <p className="font-bold text-gray-400 px-6 text-xl">
          <a target="blank" href="https://www.linkedin.com/in/mohd-bilal-/">
            Layout By : <span className="text-white">Mohd Bilal</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default page;
