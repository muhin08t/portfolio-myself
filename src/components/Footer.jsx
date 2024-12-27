import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <footer className="grid gap-5 xl:gap-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-[#223145] text-base-content p-10">

      </footer> */}

<footer className="footer footer-center text-base-content p-8 bg-[#223145]">
  <aside>
    <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by Mohiuddin Bhuiyan</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
