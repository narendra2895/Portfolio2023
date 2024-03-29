import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';



const projectData = [
  {
    id: '1',
    image: '/thumb8.png',
    name: '3D Box Model',
    link: 'https://narendra2895.github.io/3dBoxModel/',
    desc: 'Using three js you can play around by customizing the dimensions and colors of the cube'
  },
  {
    id: '2',
    image: '/thumb6.png',
    name: 'Gulf AdBlue India',
    link: 'https://adblue.gulfoilindia.co.in/',
    desc: 'Wordpress website which hass helped increase the marketing and business of the company. '

  },
  {
    id: '3',
    image: '/thumb7.png',
    name: 'Society Pro ',
    link: 'https://society-pro.com',
    desc: 'UI design and logo design for rebranding the business and creating its online presence'
  },
  {
    id: '4',
    image: '/thumb5.jpg',
    name: 'Javascript Projects',
    link: 'https://github.com/narendra2895/Javascript-Projects',
    desc: 'Javascript projects to enchance knowdledge and skill and just to have fun.'
  },
]

const Work = () => {
  return (
    <div className="container pt-52 mx-auto">
      <div className="flex flex-col xl:gap-5  content justify-center items-center">
        <div className="basis-1/2">
          <h1 className="h1 basis-1/2"> My <span className="text-accent">Work.</span></h1>
          <p className="xl:block hidden">During my tenure at 3Minds Digital, I successfully led the development of a WordPress microsite for Gulf AdBlue India, managing both frontend and backend components and maintaining close client collaboration. Additionally, I engineered a cost-effective store locator application using the Google Maps Platform, optimizing API calls for efficiency. My portfolio includes diverse JavaScript projects and an interactive 3D box modal created with Three.js, demonstrating my commitment to web development and innovation.</p>
        </div>
        <Swiper
          className="basis-1/2 mySwiper"
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}

        >
          {projectData.map((item) => (
            <SwiperSlide key={item.id} className="h-100">
              <div className="flex flex-col gap-3 custom-scroll" >
                <Image src={item.image} height={300} width={350} alt="image" className="rounded-xl h-[200px] w-[250px] mx-auto" />
                <a href={item.link} target="blank"><p className="text-center text-2xl">{item.name}</p></a>
                <p className="xl:text-center " >{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

    </div>
  );
};

export default Work;
