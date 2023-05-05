import Image from "next/image";
import React from "react";
import gitImg1 from "../public/git-img-1.jpeg";
import gitImg2 from "../public/git-img-2.jpeg";
import gitImg3 from "../public/git-img-3.jpeg";
import gitImg4 from "../public/git-img-4.jpeg";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Projects</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src={gitImg1}
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={gitImg2}
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={gitImg3}
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={gitImg4}
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
