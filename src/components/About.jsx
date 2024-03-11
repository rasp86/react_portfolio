import React from "react";
import img from "../assets/personal.png";
import { AiFillGithub, AiFillLinkedin, AiFillWindows, AiFillGitlab } from 'react-icons/ai';

const About = () => {
  return (
    <div id="About" className="">
      <div className="lg:px-52 px-10 lg:py-0 py-20 text-center gap-5 lg-t=text-left flex lg:flex-row flex-col-reverse justify-between lg:gap-24 items-center overflow-auto">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-fuchsia-300">
          
          
          <p>
            I have a clear, logical mind with a practical approach to
            problem-solving and a drive to see things through to completion.
            Extensive experience has been gained in managing and leading teams
            across multiple sectors. I thrive on overcoming business challenges
            and working with others to identify quick wins and long-term
            solutions.
          </p>
          
          <div className="flex mt-8 gap-2">
            <div className="flex">
              <div className="flex  items-center justify-center space-x-2">
                <a
                  href=""
                  className="text-fuchsia-300 hover:text-green-500 rounded-full glow-icons p-2"
                >
                  <AiFillGithub className="text-[32px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-300 hover:text-green-500 rounded-full glow-icons p-2"
                >
                  <AiFillLinkedin className="text-[32px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-300 hover:text-green-500 rounded-full glow-icons p-2"
                >
                  <AiFillWindows className="text-[32px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-300 hover:text-green-500 rounded-full glow-icons p-2"
                >
                  <AiFillGitlab className="text-[32px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src={img}
          width={290}
          height={290}
          id="personal"
          className="rounded-full border-none glow-image p-1 hidden:border-green-200"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
