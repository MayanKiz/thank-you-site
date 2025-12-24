"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"
import { useGlobalAudio } from "../AudioProvider"

export default function FirstScreen({ onNext }) {
    const audioRef = useGlobalAudio()

    const handleNext = () => {
        audioRef.current?.play().catch(() => {})
        onNext()
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/30 to-blue-100/40 blur-3xl" />

            {/* GIF */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.4, type: "spring", bounce: 0.4 }}
                className="mb-12 z-10"
            >
                <img src="/gifs/hello.gif" className="w-40 mx-auto" />
            </motion.div>

            {/* Text */}
            <h1 className="text-4xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                I want to say something
            </h1>

            <p className="text-xl font-bold text-gray-700 flex justify-center gap-2 mb-12">
                straight from my heart
                <Heart className="text-pink-500" fill="currentColor" />
            </p>

            {/* Button */}
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white text-xl font-semibold rounded-full shadow-2xl"
            >
                Let me tell you ❤️
            </motion.button>

        </div>
    )
}