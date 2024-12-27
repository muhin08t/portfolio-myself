import React from 'react';
import Card from './Card';

const Skills = () => {
    return (
      <div id='skills'>
        <div className="text-center pt-20 pb-2">
          <h1 className="text-3xl italic font-semibold text-blue-600">My Skills</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 m-10">
            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_android2.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Android</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_java.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Java</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_kotlin.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Kotlin</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_sqlite.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Sqlite</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_react.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">React</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_nodejs.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Node JS</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_nextjs.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Next JS</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_expressjs.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Express</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_mongodb.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">MongoDB</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_tailwindcss.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Tailwind</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_daisyui.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">DaisyUI</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_bottstrap.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Bootstrap</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_git.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Git</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_linux.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Linux</h2>
              </div>
            </div>

            <div className="card w-36 h-36 bg-base-100 shadow-xl transition-transform duration-300 hover:scale-110">
              <div className="card-body flex flex-col items-center">
                <img
                  className="w-16 h-16"
                  src="images/icon_firebase.png"
                  alt="Categories"
                />
                <h2 className="card-title text-center">Firebase</h2>
              </div>
            </div>

        </div>
        
      </div>
    );
};

export default Skills;