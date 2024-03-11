import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillWindows,
  AiFillGitlab,
} from "react-icons/ai";

function Banner() {
  return (
    <div className="lg:px-52 px-10 lg:py-0 py-20 text-center gap-5 lg-t=text-left flex lg:flex-row flex-col-reverse justify-between lg:gap-24 items-center overflow-auto">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-fuchsia-300">
        <h1 className="text-[42px] font-semibold mb-6 leading-tight">
          Welcome in my
          <span className="text-green-500"> Portfolio Web Site</span>
        </h1>
      </div>
    </div>
  );
}

export default Banner;
