import React from "react";
import gitImg1 from "../public/git-img-1.jpeg";
import gitImg2 from "../public/git-img-2.jpeg";
import gitImg3 from "../public/git-img-3.jpeg";
import gitImg4 from "../public/git-img-4.jpeg";
import { GithubImg } from "./GithubImg";

export const Github = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow Me on Github</p>
     <a href="https://github.com/TakeshiDead"> <p className="pb-4">TakeshiDead</p></a>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
        <a href="https://github.com/TakeshiDead/Color-Flipper"><GithubImg socialImg={gitImg1} /></a>
        <a href="https://maakako.com/"><GithubImg socialImg={gitImg2} /></a>
        <a href="https://github.com/TakeshiDead/Password-Generator"><GithubImg socialImg={gitImg3} /></a>
       <a href="https://github.com/TakeshiDead/Rickandmorty<a></a>"> <GithubImg socialImg={gitImg4} /></a>
      </div>
    </div>
  );
};
