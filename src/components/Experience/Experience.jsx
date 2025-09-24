// import React from 'react';
// import { experiences } from '../../constants';

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in various organizations.
//         </p>
//       </div>

//       {/* Timeline Container */}
//       <div className="relative">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`mb-20 flex flex-col sm:flex-row items-center ${
//               index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white border-4 border-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-12 h-12 object-contain rounded-full"
//               />
//             </div>

//             {/* Card */}
//             <div
//               className={`relative w-full sm:max-w-md bg-gray-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(130,69,236,0.4)] backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
//                 index % 2 === 0
//                   ? 'sm:ml-[calc(50%+2rem)]'
//                   : 'sm:mr-[calc(50%+2rem)]'
//               }`}
//             >
//               {/* Header */}
//               <div className="mb-4">
//                 <h3 className="text-xl sm:text-2xl font-bold text-white">
//                   {experience.role}
//                 </h3>
//                 <h4 className="text-md text-gray-300">{experience.company}</h4>
//                 <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
//               </div>

//               {/* Description */}
//               <p className="text-gray-400 leading-relaxed mb-4">
//                 {experience.desc}
//               </p>

//               {/* Skills */}
//               <div>
//                 <h5 className="font-semibold text-white mb-2">Skills:</h5>
//                 <ul className="flex flex-wrap gap-2">
//                   {experience.skills.map((skill, idx) => (
//                     <li
//                       key={idx}
//                       className="bg-purple-600/80 text-white px-3 py-1 text-xs sm:text-sm rounded-lg shadow-md"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className={`relative mb-20 flex flex-col sm:flex-row items-center ${
                isLeft ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Experience Card */}
              <div
                className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                  isLeft ? "sm:ml-48" : "sm:mr-48"
                } mt-20 sm:mt-0`}
              >
                {/* Header */}
                <div className="flex items-center space-x-6">
                  <div className="w-21 h-20 bg-white rounded-md overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-gray-300">{experience.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{experience.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
