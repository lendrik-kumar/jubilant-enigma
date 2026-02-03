import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0
    });

    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="
        w-screen overflow-hidden h-full
        py-20 px-5
        sm:py-32 sm:px-10
        bg-white
      "
    >
      <div className="mx-auto relative max-w-[1120px]">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1
            id="title"
            className="
              text-[var(--color-gray)]
              text-3xl font-medium mb-5
              opacity-0 translate-y-20
              md:text-5xl
              lg:text-6xl lg:mb-0
            "
          >
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="
              link
              flex items-center gap-2
              text-[var(--color-blue)]
              text-xl cursor-pointer
              opacity-0 translate-y-20
              hover:underline
              py-4
            ">
              Watch the film
              <img src={watchImg} alt="watch" />
            </p>

            <p className="
              link
              flex items-center gap-2
              text-[var(--color-blue)]
              text-xl cursor-pointer
              opacity-0 translate-y-20
              hover:underline
              py-4
            ">
              Watch the film
              <img src={rightImg} alt="watch" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
