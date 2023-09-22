import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import 'swiper/css';


const projectData = [
  {
    id: '1',
    image: '/thumb8.png',
    name: '3D Box Model',
    link: 'https://narendra2895.github.io/3dBoxModel/',
    desc: 'Using three js asjna djasldnaslkndlaknd ansdknaslkd andkasnda nadklasnd'
  },
  {
    id: '2',
    image: '/thumb6.png',
    name: 'Gulf AdBlue India',
    link: 'https://adblue.gulfoilindia.co.in/',
    desc: 'Using three js asjna djasldnaslkndlaknd ansdknaslkd andkasnda nadklasnd'

  },
  {
    id: '3',
    image: '/thumb7.png',
    name: 'Society Pro ',
    link: 'https://github.com/narendra2895/societypro',
    desc: 'Using three js asjna djasldnaslkndlaknd ansdknaslkd andkasnda nadklasnd'
  },
  {
    id: '4',
    image: '/thumb5.jpg',
    name: 'Javascript Projects',
    link: 'https://github.com/narendra2895/Javascript-Projects',
    desc: 'Using three js asjna djasldnaslkndlaknd ansdknaslkd andkasnda nadklasnd'
  },
]

const Work = () => {
  return (
    <div className="container py-52 mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <h1 className="h1 basis-1/2"> My <span className="text-accent">Work.</span></h1>
        <Swiper
          className="basis-1/2 mySwiper"
          slidesPerView='auto'
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}


        >
          {projectData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center " >

                <Image src={item.image} height={300} width={350} alt="image" className="rounded-xl h-[200px] w-[250px] mxs-auto" />

                <a href={item.link} target="blank"><p className="text-2xl">{item.name}</p></a>
                <p className="hidden lg:block">{item.desc}</p>
              </div>

            </SwiperSlide>
          ))}

        </Swiper>
      </div>

    </div>
  );
};

export default Work;
