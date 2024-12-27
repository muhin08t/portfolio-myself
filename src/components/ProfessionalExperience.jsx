import React from "react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      role: "Android Developer",
      company: "TopOfStack Software, Dhaka",
      duration: "02/02/2015 – 22/06/2016",
    },
    {
      role: "Android Developer",
      company: "BJIT Limited, Dhaka",
      duration: "27/06/2016 – 18/06/2019",
    },
  ];

  return (
    <div id="experience" className="mx-10 mb-10">
           <div className="text-center pt-20 pb-10">
        <h1 className="text-3xl font-semibold italic text-blue-600 mb-3">Professional Experience</h1>

      </div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex justify-between items-start bg-white shadow-md p-4 rounded-lg mb-4"
        >
          <div>
            <h2 className="text-lg font-semibold">{exp.role}</h2>
            <p className="text-gray-600">{exp.company}</p>
          </div>
          <p className="text-gray-500">{exp.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperience;
