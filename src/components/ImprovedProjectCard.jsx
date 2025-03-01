import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ImprovedProjectCard = () => {
  return (
    <div id="projects" className="mx-10 mb-0 pt-0 scroll-mt-20">
      <div className="text-center pt-10 mb-10">
        <h1 className="text-3xl font-semibold italic text-blue-600 mb-3">Projects developed by me</h1>
        <hr className="w-4/5 border-t border-black mx-auto mt-5" />

      </div>
      <div className="flex flex-col gap-10">
      <div className="flex gap-10 items-stretch shadow-lg rounded-lg p-10 ">
        <div className="w-[45%] hidden md:block">
          <img className="rounded-lg h-full object-cover" src="/images/img_easy_deals.jpg" alt="" />
        </div>
        <div className="w-[100%] md:w-[55%] mx-auto shadow-lg rounded-lg px-5 pb-5 flex flex-col">
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
    <div className="flex gap-10 items-stretch shadow-lg rounded-lg p-10">
        <div className="w-[45%] hidden md:block">
          <img className="rounded-lg h-full object-cover" src="/images/img_e_learning.jpg" alt="" />
        </div>
        <div className="w-[100%] md:w-[55%] mx-auto shadow-lg rounded-lg px-5 pb-5 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">E-learning</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Full stack online based learing web application</li>
          <li>Login feature with email and password</li>
          <li>Login feature with google and github</li>
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
            href="https://github.com/muhin08t/e-learning.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <FaGithub className="mr-2" />
            Repo Link
          </a>
          <a
            href="https://muhin-e-learning.netlify.app/"
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
    <div className="flex gap-10 items-stretch shadow-lg rounded-lg p-10">
        <div className="w-[45%] hidden md:block">
          <img className="rounded-lg h-full object-cover" src="/images/img_book_house.jpg" alt="" />
        </div>
        <div className="w-[100%] md:w-[55%] mx-auto shadow-lg rounded-lg px-5 pb-5 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Book House</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Front-end web application for a book library</li>
          <li>Category wise booklist display</li>
          <li>Book details with wish list and add to cart option</li>
        </ul>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-4">
            Technology Used:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <span className="text-center px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-lg">
              React
            </span>

            <span className="text-center px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-lg">
              Tailwind CSS
            </span>
            <span className="text-center px-3 py-1 bg-pink-100 text-pink-600 text-sm font-medium rounded-lg">
              DaisyUI
            </span>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com/muhin08t/botcamp-tot-react-bookshop.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <FaGithub className="mr-2" />
            Repo Link
          </a>
          <a
            href="https://botcamp-tot-react-bookshop.netlify.app/"
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
    <div className="flex gap-10 items-stretch shadow-lg rounded-lg p-10">
        <div className="w-[45%] hidden md:block">
          <img className="rounded-lg h-full object-cover" src="/images/img_secret_key.png" alt="" />
        </div>
        <div className="w-[100%] md:w-[55%] mx-auto shadow-lg rounded-lg px-5 pb-5 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Secret key matcher</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Front-end web application for key validing</li>
          <li>Random key generator section </li>
          <li>Key validtior section</li>
        </ul>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-4">
            Technology Used:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <span className="text-center px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-lg">
              HTML 
            </span>

            <span className="text-center px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-lg">
               CSS
            </span>
            <span className="text-center px-3 py-1 bg-pink-100 text-pink-600 text-sm font-medium rounded-lg">
              Javascript
            </span>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com/muhin08t/Secret-Key-Matcher"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <FaGithub className="mr-2" />
            Repo Link
          </a>
          <a
            href="https://muhin08t.github.io/Secret-Key-Matcher/"
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

    <div className="flex gap-10 items-stretch shadow-lg rounded-lg p-10">
        <div className="w-[45%] hidden md:block">
          <img className="rounded-lg h-full object-cover" src="/images/img_food_heaven.png" alt="" />
        </div>
        <div className="w-[100%] md:w-[55%] mx-auto shadow-lg rounded-lg px-5 pb-5 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Food Heaven</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Front-end web application for displaying food items</li>
          <li>Category wise foodlist display </li>
          <li>FAQ section implemented</li>
        </ul>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-4">
            Technology Used:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <span className="text-center px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-lg">
              HTML 
            </span>

            <span className="text-center px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-lg">
               CSS
            </span>
            <span className="text-center px-3 py-1 bg-pink-100 text-pink-600 text-sm font-medium rounded-lg">
              Javascript
            </span>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com/muhin08t/Food-Heaven"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <FaGithub className="mr-2" />
            Repo Link
          </a>
          <a
            href="https://muhin08t.github.io/Food-Heaven/"
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
    </div>
  );
};

export default ImprovedProjectCard;
