import React from 'react'
import { skills } from '@/data';

function TechnicalSkills() {
  return (
    <div className="relative my-10 z-10">
      <h1 id='skills' className="heading">
        My<span className='text-purple'> tech stack</span>
      </h1>
    <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center mt-10">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-white font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div></div>
  )
}

export default TechnicalSkills