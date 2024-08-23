import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="text-gray-900 py-10 mt-20 text-justify">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] justify-between items-start gap-8 mb-10">
        {/* Company Info */}
        <div>
          <img src={assets.souldance544} alt="Logo" className="w-1/2 sm:w-2/3 md:w-1/2 lg:w-2/6 mb-4" />
          <p className="text-gray-500 sm:w-3/4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor
            dignissimos odit voluptate ullam reprehenderit itaque delectus
            voluptatem voluptatibus, earum inventore enim nihil commodi eveniet
            at voluptas nostrum hic sint. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt tenetur sint sapiente
            ducimus? Officia porro rem voluptate ipsum. Nobis, architecto.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-4">COMPANY</h1>
          <ul className="text-gray-500 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-4">GET IN TOUCH</h1>
          <p className="text-gray-500">+880 1612-677948</p>
          <p className="text-gray-500">myselfadul@gmail.com</p>
        </div>
      </div>
      
      {/* Divider Line */}
      <hr className="w-full h-[1.5px] bg-slate-400 rounded-full mb-4" />
      
      {/* Copyright Section */}
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
