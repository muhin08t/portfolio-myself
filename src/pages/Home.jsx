import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();



  const handleClick = () => {
    console.log("btn click");
    window.open('Resume_Mohiuddin_Bhuiyan.pdf', '_blank');
  };

  books.map((book) => {
    console.log(book.bookName);
    console.log(book.author);
  });

  return (
    <div id="home" className="px-5 pt-10">
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full">
            <img src="images/profile2.png" alt="Profile Image" />
          </div>
        </div>

        <div className="flex flex-col justify-center ml-12">
          <h3 className="text-xl text-black">Hi, There I'm </h3>
          <h1 className="text-4xl font-semibold pt-3">
            <span className="text-purple-400"> Mohiuddin</span> Bhuiyan
          </h1>
          <p className="pt-5">
            In order to prove my innovation & versatility, I prefer to work with them who <br></br>
            values enthusiasm & creativity so that I can maximize my potentiality. I am a  <br></br>
            fast paced learner and enthusiast of new technologies. Capable of working <br></br>
            on  a team with people at all levels as well as working independently.
          </p>
          <div className="flex pt-8">
            <button onClick={() => {handleClick()}} className=" bg-purple-500 hover:bg-purple-600 text-white italic font-semibold py-2 px-6 rounded-full">
              Resume
            </button>
            <div className="flex items-center ml-12">
              <a
                href="https://www.linkedin.com/in/mohiuddin-bhuiyan-a0167090"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-purple-500 hover:bg-purple-600 text-white rounded-full"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.571c0-1.333-.026-3.048-1.855-3.048-1.858 0-2.145 1.45-2.145 2.948v5.671h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.563 2.841-1.563 3.039 0 3.6 2.002 3.6 4.604v5.592z" />
                </svg>
              </a>

              <a
                href="https://github.com/muhin08t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8  bg-purple-500 hover:bg-purple-600 text-white rounded-full ml-3"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.112.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.728-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.204.084 1.837 1.236 1.837 1.236 1.07 1.833 2.81 1.303 3.492.996.108-.775.42-1.303.763-1.604-2.665-.304-5.466-1.334-5.466-5.932 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.47 11.47 0 013.003-.403c1.02.005 2.047.138 3.003.403 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.922.432.372.816 1.102.816 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.192.694.8.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://leetcode.com/u/muhin_cse/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-purple-500 hover:bg-purple-600 text-white rounded-full ml-3"
                aria-label="LeetCode"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm4.536 16.364c.153-.335.364-.772.707-1.229-.89-.97-1.487-1.79-2.37-2.056-1.564-.417-2.701.424-2.701.424-.142-.062-.274-.138-.396-.237-1.034-.991-1.526-2.44-1.526-2.44 0-.664.066-1.42.517-1.989-.17-.411-.347-.878-.614-1.267-2.438.825-4.44 1.16-6.108.258-1.669-.903-2.44-2.99-2.44-2.99-.13-.268-.342-.552-.64-.83.288-.128.511-.308.64-.56-.442-.61-.662-1.291-.46-1.976.412-1.248 1.25-1.888 2.606-2.046.686-.066 1.501.164 2.474.716 1.191-.268 2.608-.218 4.187.355 1.67 0 3.003 1.358 3.003 2.967 0 .14-.012.276-.03.415.707.414 1.374.94 1.928 1.487-1.62 1.087-3.406 1.345-4.636 3.207z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
