/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading" id="projects">
        Recent <span className="text-purple">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-4 lg:gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="flex items-center justify-center sm:w-96 w-[80vw]"
            key={id}
          >
            <div className="container mx-auto py-8">
              <div className="card bg-white rounded-lg h-48 overflow-hidden shadow-md">
                <img
                  src={img}
                  alt="Card Image"
                  className="w-full h-full object-cover"
                /></div>
                <div className="py-4">
                <h1 className="font-bold w-full lg:text-2xl md:text-xl text-base">{title}</h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
                
              </div>
            </div>
            {/* <div title={title}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10" >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img"/>
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0"/>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
              <div className="flex items-center justify-between mt-7 mb-3"></div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
