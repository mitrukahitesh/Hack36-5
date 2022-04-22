import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white bg-opacity-50 footer bg-red">
      <div className="px-10 py-3 mx-5 sm:mx-14 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 border-b border-custom-green">
          <div>
            <a href="/">
              <img
                src="/icon.png"
                alt="Kalakriti Logo"
                className="w-24 h-24 shadow-md"
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
            <h2 className="pb-2 text-xl font-bold">Guides</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Buy Crypto
                </a>
              </li>
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Support Center
                </a>
              </li>
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Submit a request
                </a>
              </li>
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Trading Rules
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pb-2 text-xl font-bold">Service</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Trade
                </a>
              </li>
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right ttext-black"></i>&nbsp;
                  Referral
                </a>
              </li>
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Exchange
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pb-2 text-xl font-bold">Useful Links</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Markets
                </a>
              </li>
              <li className="hover:text-red">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  About
                </a>
              </li>
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Latest News
                </a>
              </li>
              <li className="hover:text-black">
                <a href="/">
                  <i className="fas fa-chevron-right text-black"></i>&nbsp;
                  Charity
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-3 text-xs">
          Copyright © 2021 | Cryptomate
          <div className="pb-3 float-right">
            <Link
              to="/Tnc"
              className="hover:text-black"
            >
              Terms & Conditions
            </Link>{" "}
            &emsp;|&emsp;
            <Link
              to="/Privacy"
              className="hover:text-black"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
