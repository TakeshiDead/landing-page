import React from "react";
const PNG_FILE_URL = 'http://localhost:3000/Resume-Dark.pdf'
const Hero = ({ heading, message }) => {
const downloadFileAtURL=(url)=>{
  const aTag = document.createElement('a')
  console.log('hola')
  const fileName = url.split('/').pop()
  aTag.href=url
  aTag.setAttribute('download',fileName)
  document.body.appendChild(aTag)
  aTag.click()
  aTag.remove()
}
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/*Overlay*/}
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className=" p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-2xl">{message}</p>
        <button onClick={()=>{downloadFileAtURL(PNG_FILE_URL)}} className="px-8 py-2 border">Resume</button>
      </div>
    </div>
  );
};

export default Hero;
