import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const playlist = [
    "/iwasneverthere.mp3",
    "/escapism.mp3",
    "/blue.mp3",
    "/YAD.mp3",
    "/stars.mp3",
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const lastKeyPressTime = useRef(0);
  const lastTapTime = useRef(0);

  // Play a specific track and ensure it plays immediately
  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = playlist[index];
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const skipToNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    if (isPlaying) {
      audioRef.current.src = playlist[nextIndex];
      audioRef.current.play();
    }
  };

  const handleTrackEnd = () => {
    skipToNextTrack();
  };

  // Set default volume when loaded
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.9; // Lower volume (30%)
    }
  }, []);

  // Easter egg: right arrow double press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        const now = Date.now();
        if (now - lastKeyPressTime.current < 200) {
          skipToNextTrack();
        }
        lastKeyPressTime.current = now;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, currentTrackIndex]);

  // Easter egg: double tap for mobile
  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTapTime.current < 400) {
      skipToNextTrack();
    }
    lastTapTime.current = now;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-2">
      <p className="text-xs text-gray-300 italic">
        Wanna play music while scrolling?
      </p>

      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex]}
        onEnded={handleTrackEnd}
      />

      <button
        onClick={togglePlay}
        onTouchStart={handleDoubleTap}
        className="p-4 rounded-full shadow-lg transition transform hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #00f0ff, #00ff80)",
          boxShadow: "0 0 15px #00f0ff, 0 0 25px #00ff80",
          color: "white",
        }}
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
