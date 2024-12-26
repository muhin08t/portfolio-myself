import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ImprovedProjectCard = () => {
  return (
    <div id="projects" className="mx-10 mb-10">
      <div className="text-center pt-20 pb-6">
        <h1 className="text-3xl font-semibold text-blue-600 mb-3">Projects developed by me</h1>

      </div>
    <div className="flex gap-4 items-stretch">
        <div className="w-[50%]">
          <img className="rounded-lg h-full object-cover" src="/images/img_easy_deals.jpg" alt="" />
        </div>
        <div className="w-[50%] mx-auto shadow-lg rounded-lg px-5 pb-5 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Easy Deals</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Full stack e-commerce web application</li>
          <li>Firebase SDK used for authentication</li>
          <li>Dashboard for product handling</li>
          <li>Separate roles for admin and user</li>
        </ul>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-4">
            Technology Used:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <span className="text-center px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-lg">
              React
            </span>
            <span className="text-center px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-lg">
              Node.js
            </span>
            <span className="text-center px-3 py-1 bg-yellow-100 text-yellow-600 text-sm font-medium rounded-lg">
              Express.js
            </span>
            <span className="text-center px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-lg">
              Tailwind CSS
            </span>
            <span className="text-center px-3 py-1 bg-pink-100 text-pink-600 text-sm font-medium rounded-lg">
              DaisyUI
            </span>
            <span className="text-center px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-lg">
              Firebase
            </span>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com/muhin08t/easy-deals-client.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <FaGithub className="mr-2" />
            Repo Link
          </a>
          <a
            href="https://easy-deals-client.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>


    </div>
  );
};

export default ImprovedProjectCard;
