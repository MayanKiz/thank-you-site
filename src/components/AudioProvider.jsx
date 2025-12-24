"use client"

import { createContext, useContext, useRef } from "react"

const AudioContext = createContext(null)

export function AudioProvider({ children }) {
  const audioRef = useRef(null)

  return (
    <AudioContext.Provider value={audioRef}>
      <audio
        ref={audioRef}
        src="/gifs/Aaj-Se-Teri-Slowed-Reverb-Arijit-Singh-Padman-Akshay-Kumar-R.m4a"
        preload="auto"
        loop
      />
      {children}
    </AudioContext.Provider>
  )
}

export const useGlobalAudio = () => useContext(AudioContext)