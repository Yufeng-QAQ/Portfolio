import React from "react";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiSpeedUpLine } from "react-icons/ri";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-[#2F2F2F] relative rounded-lg p-5">
      {/* Company Logo & Name */}
      <div className="flex items-center space-x-2">
        <Image
          src={experience.image}
          alt={experience.company}
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-white text-center lg:text-xl ml-3">
          {experience.company}
        </p>
      </div>

      {/* Job Title & Info */}
      <p className="mt-2 text-green-400 lg:text-xl">{experience.title}</p>
      <div className="flex flex-col text-gray-400 text-xs md:text-sm lg:text-base">
        <div className="flex items-center space-x-2">
          <MdOutlineLocationOn />
          <span className="ml-2">{experience.location}</span>
        </div>
        <div className="flex items-center space-x-2 mt-0.5">
          <RiSpeedUpLine />
          <span className="ml-2">{experience.duration}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mt-3 text-gray-300">
        <p className="text-white text-sm md:text-md lg:text-lg">
          Key Achievements:
        </p>
        <ul className="list-none pl-0 ">
          {experience.achievements.map((achievement, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-gray-300 text-xs md:text-sm lg:text-base mt-2"
            >
              <span className="h-1 w-1 rounded-full bg-[#23950A] flex-shrink-0 mt-2"></span>
              <span className="flex-1">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
