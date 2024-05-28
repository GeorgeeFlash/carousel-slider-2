'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { Dot } from 'react-bootstrap-icons'

type Props = {}

const Carousel = (props: Props) => {
    const slides = [
        {
            url: './1.jpg',
        },
        {
            url: './2.jpg',
        },
        {
            url: './5.jpg',
        },
        {
            url: './6.jpg',
        },
        {
            url: './9.jpg',
        },
        {
            url: './10.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      {/* Check for BsCheveronLeft as well as right */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 tranlate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={25} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 tranlate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={25} />
      </div>
      <div className="top-24 py-2 flex justify-center">
        {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`text-2xl cursor-pointer ${slideIndex === currentIndex && ' text-blue-400 text-3xl'}`}><Dot size={30}/></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel