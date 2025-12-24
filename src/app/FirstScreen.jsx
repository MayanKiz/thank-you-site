"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useGlobalAudio } from "./AudioProvider"

export default function FirstScreen() {
  const router = useRouter()
  const audioRef = useGlobalAudio()

  const handleNext = () => {
    audioRef.current?.play().catch(() => {})
    router.push("/second")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.img
        src="/gifs/hello.gif"
        className="w-40 mb-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />

      <h1 className="text-4xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
        I want to say something
      </h1>

      <p className="text-xl font-bold text-gray-700 flex gap-2 mb-10">
        straight from my heart
        <Heart className="text-pink-500" fill="currentColor" />
      </p>

      <button
        onClick={handleNext}
        className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white rounded-full text-lg font-semibold"
      >
        Let me tell you ❤️
      </button>
    </div>
  )
}