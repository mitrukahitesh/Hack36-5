import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white mt-6 footer bg-custom-blue">
      <div className="px-10 py-3 mx-5 sm:mx-14 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 border-b border-custom-green">
          <div>
            <a href="/">
              <img
                src="/icon.png"
                alt="Kalakriti Logo"
                className="w-24 md:w-36 h-24 md:h-36"
              />
            </a>
            <ul className="pt-5 text-lg list-style-type-none text-gray-300">
              <i className="pr-3 fab fa-facebook hover:cursor-pointer hover:text-xl hover:text-black"></i>
              <i className="pr-3 fab fa-twitter hover:cursor-pointer hover:text-xl hover:text-black"></i>
              <i className="pr-3 fab fa-instagram hover:cursor-pointer hover:text-xl hover:text-black"></i>
              <i className="fab fa-linkedin hover:cursor-pointer hover:text-xl hover:text-black"></i>
            </ul>
          </div>
          <div>
            <h2 className="pb-2 text-xl text-white font-bold">Guides</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-black hover:translate-x-2">
                <a href="/">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                  Exhibition
                </a>
              </li>
              <li className="hover:text-black hover:translate-x-2">
                <a href="/">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                  Support Center
                </a>
              </li>
              <li className="hover:text-black hover:translate-x-2">
                <a href="/">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                  Returns and Cancellations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pb-2 text-xl font-bold">Service</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-black hover:translate-x-2">
                <a href="/">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                  Bid
                </a>
              </li>
              <li className="hover:text-black hover:translate-x-2">
                <a href="/">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                  Referral
                </a>
              </li>
              <li className="hover:text-black hover:translate-x-2">
                <a href="/">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pb-2 text-xl font-bold">Useful Links</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-black hover:translate-x-2">
                <a href="/">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                  Disclaimer
                </a>
              </li>
              <li className="hover:text-black hover:translate-x-2">
                <a href="/">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                  About
                </a>
              </li>
              <li className="hover:text-black hover:translate-x-2">
                <a href="/Privacy">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                 Privacy Policy
                </a>
              </li>
              <li className="hover:text-black hover:translate-x-2">
                <a href="/TnC">
                  <i className="fas fa-chevron-right text-white"></i>&nbsp;
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-3 text-xs">
          Copyright © 2022 | Kalakriti
        </div>
      </div>
    </div>
  );
};

export default Footer;
