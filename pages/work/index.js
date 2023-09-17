import React from "react";
import Image from "next/image";


const projectData = [
  {
    id: '1',
    image: '/thumb8.png',
    name: '3D Box Model',
    link:'https://narendra2895.github.io/3dBoxModel/'
  },
  {
    id: '2',
    image: '/thumb6.png',
    name: 'Gulf AdBlue India',
    link:'https://adblue.gulfoilindia.co.in/'

  },
  {
    id: '3',
    image: '/thumb7.png',
    name: 'Society Pro ',
    link:'https://github.com/narendra2895/societypro'
  },
  {
    id: '4',
    image: '/thumb5.jpg',
    name: 'Javascript Projects',
    link:'https://github.com/narendra2895/Javascript-Projects'
  },
]

const Work = () => {
  return (
    <div className="container py-52 mx-auto">
      <div className="flex ">
        <h1 className="h1 basis-1/4"> My <span className="text-accent">Work.</span></h1>
        <div className="project-work flex justify-center items-center flex-wrap pl-10  gap-10 basis-3/4">
          {projectData.map((item) => (
            <div key={item.id} >
              <Image src={item.image} height={300} width={350} alt="image" className="rounded-lg" />
              <a href={item.link} target="blank"><p className="text-2xl">{item.name}</p></a>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Work;
