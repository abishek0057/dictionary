import React, { useRef, useEffect, useState } from "react";
import play from "../assets/icon-play.svg";

const MainBody = ({ result }) => {
  const audioRef = useRef(null);
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const handleAudioPlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  useEffect(() => {
    if (result[0].phonetics.length >= 1) {
      const audioUrl = result[0].phonetics.find(
        (phonetic) => phonetic.audio.length > 5
      );
      setShowPlayBtn(audioUrl ? true : false);
      audioRef.current.src = audioUrl && audioUrl.audio ? audioUrl.audio : null;
    } else {
      setShowPlayBtn(false);
    }
  }, [result]);

  return (
    <div className='mt-10 p-3'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-4xl sm:text-5xl font-extrabold'>
            {result[0].word}
          </h1>
          <h1 className='text-xl font-light pt-5'>
            {result[0].phonetic ? result[0].phonetic : ""}
          </h1>
        </div>
        <audio ref={audioRef}>
          <source type='audio/mpeg' />
        </audio>
        {showPlayBtn && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='75'
            height='75'
            viewBox='0 0 75 75'
            src={play}
            alt='play-music'
            onClick={handleAudioPlay}
            className='select-none cursor-pointer'
          >
            <g
              fill='#A445ED'
              fillRule='evenodd'
              className='hover:fill-fuchsia-800'
            >
              <circle cx='37.5' cy='37.5' r='37.5' opacity='.25' />
              <path d='M29 27v21l21-10.5z' />
            </g>
          </svg>
        )}
      </div>
      <div className='mt-3'>
        {result[0].meanings.map((ele) => {
          return (
            <div className='py-5' key={ele.partOfSpeech}>
              <div className='flex justify-start items-center gap-x-2 sm:gap-x-8'>
                <h1 className='text-xl font-semibold italic'>
                  {ele.partOfSpeech}
                </h1>
                <div className='h-px w-full bg-slate-300 mt-1'></div>
              </div>
              <h1 className='text-lg sm:text-xl pt-8 pb-2'>Meaning</h1>
              <ul className='list-disc pl-6 text-sm sm:text-base'>
                {ele.definitions.map((def, index) => (
                  <li key={index} className='py-1 text-base sm:text-lg'>
                    {def.definition}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <div className='py-3 mb-10 sm:mb-14'>
          <hr className='mb-5' />
          <h1 className='text-lg'>Source</h1>
          <h1
            className='underline italic pt-1 cursor-pointer select-none'
            onClick={() => window.open(result[0].sourceUrls[0], "_blank")}
          >
            {result[0].sourceUrls[0]}🔗
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
