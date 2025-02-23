import React from 'react';


const Educations = () => {
    return (
      <div id="educations" className="mx-10 scroll-mt-20 mb-10">
        <div className="text-center pt-14 mb-14">
          <h1 className="text-3xl italic font-semibold text-blue-600">
            Educations
          </h1>
        </div>
        <div className="flex justify-center"> {/* Centers the block horizontally */}
  <div className="text-left"> {/* Keeps text left-aligned inside */}
    <h1 className="text-2xl font-semibold">
      B.Sc(Engineering) in Computer Science & Engineering
    </h1>
    <h3 className="text-2xl">2009-2013</h3>
    <p className="text-lg">
      Shahjalal University of Science & Technology (SUST)
    </p>
    <p className="text-lg">Sylhet, Bangladesh</p>
  </div>
</div>

      </div>
    );
};

export default Educations;