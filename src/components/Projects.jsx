import React from 'react';

const Projects = () => {
    return (
      <div id="projects" className='mx-10'>
        <div className="text-center pt-20 pb-6">
          <h1 className="text-3xl font-bold">Projects developed by me</h1>
        </div>

        <div className='flex flex-col'>
        <h2 className="text-2xl font-semibold mb-4">Easy deals </h2>
        <ul className='list-disc pl-5'>
            <li className='pb-2'>full stack e-commerce web application</li>
            <li className='pb-2'>Firebase sdk used for authentication</li>
            <li className='pb-2'>Dashboard for product handling</li>
            <li className='pb-2'>separete role for admin and user</li>
        </ul>
        <h4 className="text-xl  mb-2">Technology used: </h4>
        <div className='flex mb-2'>
        <h6 className="text-lg mr-2 text-purple-500">React </h6>
        <h6 className="text-lg mr-2 text-purple-500">Node.js </h6>
        <h6 className="text-lg mr-2 text-purple-500">Express.js </h6>
        <h6 className="text-lg mr-2 text-purple-500">Tailwind CSS</h6>
        <h6 className="text-lg mr-2 text-purple-500">DaisyUI </h6>
        <h6 className="text-lg mr-2 text-purple-500">Firebase </h6>
        </div>
        <div className='flex mb-3'>
            <a href="https://github.com/muhin08t/easy-deals-client.git"
                target='_blank'
                className='text-lg text-blue-600 underline'
            >
                Repo Link 
            </a>
            <a href="https://easy-deals-client.netlify.app/"
                target='_blank'
                className='text-lg text-blue-600 underline ml-3'
            >
                Live demo 
            </a>
        </div>
        </div>
      </div>
    );
};

export default Projects;