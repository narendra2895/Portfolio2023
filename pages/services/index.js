import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Circles from "../../components/Circles";
import { Autoplay } from 'swiper';
import Image from "next/image";

import { FaPaperPlane, FaDragon } from "react-icons/fa";

const servicesData = [
  {
    id: '0',
    icon: <FaPaperPlane />,
    name: 'Custom Website Development',
    detail: 'I create custom websites that are tailored to your specific needs and requirements. I will work with you to design, develop, and launch a website that meets your goals. I can help you with everything from creating a wireframe to developing the final code. I also offer a variety of additional services, such as SEO, content writing, and social media marketing.'
  },
  {
    id: '1',
    icon: <FaDragon />,
    name: 'Web-Design with UI/UX principles',
    detail: 'I use modern UI/UX principles to create websites that are visually appealing and easy to use. My designs are based on the latest research in human-computer interaction, ensuring that your website is user-friendly and engaging. I can help you create a website that is both beautiful and functional. All my websites are web responsive, so that they can be easily accesible via any user device'
  },
  {
    id: '2',
    name: 'Front-End Development',
    detail: 'I develop front-end websites using the latest technologies, such as React or even traditional HTML, CSS and JS websites. My code is clean, efficient, and secure, ensuring that your website performs well and is protected from security threats.'
  },
  {
    id: '3',
    name: 'Logo or Brand Design',
    detail: '4Lorem ipsum dolor sit, amet consectetur adipisicing elit...'
  },
];

const Services = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
    console.log(swiper.realIndex)
  };

  return (
    <div className="container  flex xl:flex-row flex-col justify-center items-center xl:items-start py-52 mx-auto">
      <Circles />
      <div className=" animate-pulse duration-75 z-10 md:block hidden">
        <Image src={'/bulb.png'} height={350} width={220} className="absolute bottom-[50px] -left-[100px]" alt="bottom-image " />
      </div>
      <div className="basis-1/2" >
        <h1 className="h1">My Services <span className="text-accent">.</span></h1>
        <p>I have a good understanding of colors and design and love to create websites. </p>
      </div>

      <div className="basis-1/2">
        <Swiper
          slidesPerView='auto'
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {servicesData.map((item) => (
            <SwiperSlide key={item.id} >

              <h3 className=" text-center text-3xl ">{item.name}</h3>

            </SwiperSlide>
          ))}
        </Swiper>

        <div className="serviceDesc p-130 h-full">
          {servicesData.map((item, index) => (
            <div
              className={`descItem ${index === activeSlideIndex ? 'flex' : 'hidden'} text-center  animate-opaque`}
              key={item.id}
            >
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
