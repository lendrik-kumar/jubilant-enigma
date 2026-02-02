import React, { useEffect, useState, useRef } from 'react'
import { hightlightsSlides } from '../constants';
import { pauseImg, playImg, replayImg } from '../utils';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-videoId * 100}%)`,
      duration: 2,
      ease: 'power2.inOut'
    });

    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none'
      },
      onComplete: () => {
        setVideo(prev => ({ ...prev, startPlay: true, isPlaying: true }))
      }
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) =>
    setLoadedData(prev => [...prev, e]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? '10vw'
                  : window.innerWidth < 1200
                  ? '10vw'
                  : '4vw'
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: '#fff'
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], { width: '12px' });
            gsap.to(span[videoId], { backgroundColor: '#afafaf' });
          }
        }
      });

      if (videoId === 0) anim.restart();

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      isPlaying
        ? gsap.ticker.add(animUpdate)
        : gsap.ticker.remove(animUpdate);
    }
  }, [videoId, startPlay]);

  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo(prev => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;
      case 'video-last':
        setVideo(prev => ({ ...prev, isLastVideo: true }));
        break;
      case 'video-reset':
        setVideo(prev => ({ ...prev, isLastVideo: false, videoId: 0 }));
        break;
      case 'play':
      case 'pause':
        setVideo(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="pr-20 sm:pr-20">
            <div className="
              relative w-[88vw] h-[35vh]
              sm:w-[70vw] sm:h-[50vh]
              md:h-[70vh]
            ">
              <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline
                  muted
                  preload="auto"
                  ref={el => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess('video-end', i)
                      : handleProcess('video-last')
                  }
                  className={`${list.id === 2 && 'translate-x-44'} pointer-events-none`}
                  onPlay={() =>
                    setVideo(prev => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={e => handleLoadedMetadata(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map(text => (
                  <p key={text} className="text-xl md:text-2xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-6 relative flex items-center justify-center mt-10">
        <div className="flex items-center justify-center py-5 px-7 gap-2 bg-[var(--color-gray-300)] backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={el => (videoDivRef.current[i] = el)}
              className="w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                ref={el => (videoSpanRef.current[i] = el)}
                className="absolute h-full w-full rounded-full"
              />
            </span>
          ))}
        </div>

        <button className="
          ml-4 p-4 rounded-full
          bg-[var(--color-gray-300)]
          backdrop-blur
          flex items-center justify-center
        ">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt="control"
            onClick={
              isLastVideo
                ? () => handleProcess('video-reset')
                : !isPlaying
                ? () => handleProcess('play')
                : () => handleProcess('pause')
            }
          />
        </button>
      </div>
    </>
  );
};
