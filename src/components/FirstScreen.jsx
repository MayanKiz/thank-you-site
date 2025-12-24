"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"
import { useRef, useEffect } from "react"

export default function FirstScreen({ onNext }) {
    const audioRef = useRef(null)

    // Mobile audio unlock (important)
    useEffect(() => {
        const unlockAudio = () => {
            audioRef.current?.play().then(() => {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
            }).catch(() => {})
            document.removeEventListener("touchstart", unlockAudio)
        }
        document.addEventListener("touchstart", unlockAudio)
    }, [])

    const handleNext = () => {
        setTimeout(() => {
            audioRef.current?.play().catch(() => {})
        }, 150)
        onNext()
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

            {/* Background soft gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/30 to-blue-100/40 blur-3xl" />

            {/* Audio */}
            <audio
                ref={audioRef}
                src="/gifs/Long-Drive-Le-Chal-Slowed-Reverb-Lufi-Song-Rider-Song-slowed.m4a"
                preload="auto"
                loop
            />

            {/* GIF circle */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    bounce: 0.4,
                }}
                className="mb-12 relative z-10 will-change-transform"
            >
                <div className="relative w-48 h-48 md:w-52 md:h-52">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse" />
                    <div className="absolute inset-2 bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 rounded-full blur-lg opacity-40" />

                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 p-1.5 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/95 via-pink-50/95 to-purple-50/95 flex items-center justify-center overflow-hidden">
                            <motion.img
                                src="/gifs/hello.gif"
                                alt="hello"
                                className="w-36 md:w-40 -mb-7"
                                animate={{
                                    filter: [
                                        "drop-shadow(0 0 20px rgba(236,72,153,.6))",
                                        "drop-shadow(0 0 40px rgba(236,72,153,.9))",
                                        "drop-shadow(0 0 20px rgba(236,72,153,.6))",
                                    ],
                                }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Text */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mb-16 space-y-4 relative z-10"
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                >
                    I want to say something
                </motion.h1>

                <motion.p
                    className="text-2xl md:text-3xl font-bold text-gray-700 flex justify-center gap-2"
                    animate={{
                        textShadow: [
                            "0 0 20px rgba(236,72,153,.4)",
                            "0 0 40px rgba(236,72,153,.7)",
                            "0 0 20px rgba(236,72,153,.4)",
                        ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    straight from my heart
                    <Heart size={22} fill="currentColor" className="text-pink-500 mt-1" />
                </motion.p>
            </motion.div>

            {/* Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring", bounce: 0.5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="relative px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white text-xl font-semibold rounded-full shadow-2xl border border-white/70 z-10"
            >
                <span className="flex gap-2">
                    Let me tell you
                    <Heart size={20} fill="currentColor" />
                </span>
            </motion.button>

        </div>
    )
}
