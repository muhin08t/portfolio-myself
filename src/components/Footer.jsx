import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="grid gap-5 xl:gap-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-[#223145] text-base-content p-10">
        <nav className="flex-col flex items-center xl:items-start">
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav className="flex flex-col items-center xl:items-start">
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav className="flex flex-col items-center xl:items-start">
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </nav>
        <form className="flex flex-col items-center xl:items-start">
          <h6 className="footer-title text-white">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
