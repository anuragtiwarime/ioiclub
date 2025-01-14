import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function AcademicHeadCard({ image, name, role, description, linkedin }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 flex flex-col md:flex-row md:justify-between h-full gap-8">
      {/* Image Section */}
      <div className="flex flex-col items-center mb-4 md:mb-0 md:w-1/2">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-full mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-center text-black">{name}</h3>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
        <p className="text-gray-600 font-medium mb-2">{role}</p>
        <p className="text-gray-500 mb-4">{description}</p>
        <a
          href={linkedin}
          className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
