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
    if (result[0].phonetics.length <= 0 || result[0].phonetics[0].audio == "") {
      setShowPlayBtn(false);
    } else if (result && result.length > 0) {
      const audioUrl = result[0].phonetics.find(
        (phonetic) => phonetic.audio !== ""
      ).audio;
      audioRef.current.src = audioUrl;
      setShowPlayBtn(true);
    }
  }, [result]);

  return (
    <div className='mt-10 p-3'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-5xl font-extrabold'>{result[0].word}</h1>
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
    </div>
  );
};

export default MainBody;
