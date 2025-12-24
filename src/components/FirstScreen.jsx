"use client"

import { motion, AnimatePresence } from "motion/react"
import { Heart, Timer, Lock, Unlock, Play } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function FirstScreen({ onNext }) {
    const audioRef = useRef(null)
    const [password, setPassword] = useState("")
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [timeElapsed, setTimeElapsed] = useState({ d: 0, h: 0, m: 0, s: 0 })

    const correctPass = "051009"

    /* Countdown */
    useEffect(() => {
        const start = new Date("2025-12-24T13:00:00")
        const i = setInterval(() => {
            const diff = new Date() - start
            setTimeElapsed({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff / 3600000) % 24),
                m: Math.floor((diff / 60000) % 60),
                s: Math.floor((diff / 1000) % 60),
            })
        }, 1000)
        return () => clearInterval(i)
    }, [])

    useEffect(() => {
        setIsUnlocked(password === correctPass)
    }, [password])

    const handleStart = () => {
        if (!isUnlocked) return
        audioRef.current?.play().catch(() => {})
        onNext()
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-[#fffafa]">

            <audio ref={audioRef} src="/gifs/Aaj-Se-Teri-Slowed-Reverb-Arijit-Singh-Padman-Akshay-Kumar-R.m4a" loop />

            {/* Soft floating gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/30 to-blue-100/40 blur-3xl" />

            {/* Countdown */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-8 z-20 flex flex-col items-center gap-1"
            >
                <div className="flex items-center gap-2 text-pink-500 text-xs font-semibold tracking-widest uppercase">
                    <Timer size={14} /> Since then
                </div>

                <div className="flex gap-3 text-gray-800 font-black text-lg">
                    <span>{timeElapsed.d}d</span>
                    <span>{timeElapsed.h}h</span>
                    <span>{timeElapsed.m}m</span>
                    <span className="text-pink-500">{timeElapsed.s}s</span>
                </div>
            </motion.div>

            {/* Center Circle */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.4, type: "spring", bounce: 0.4 }}
                className="mb-10 relative z-10"
            >
                <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 p-1.5 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                            <motion.img
                                src="/gifs/hello.gif"
                                alt="hello"
                                className="w-36"
                                animate={{
                                    filter: [
                                        "drop-shadow(0 0 18px rgba(236,72,153,.5))",
                                        "drop-shadow(0 0 32px rgba(236,72,153,.8))",
                                        "drop-shadow(0 0 18px rgba(236,72,153,.5))",
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-10 space-y-3 z-10"
            >
                <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    I want to say something
                </h1>

                <p className="text-xl font-semibold text-gray-600 flex justify-center gap-2">
                    straight from my heart
                    <Heart size={18} className="text-pink-500 mt-1" fill="currentColor" />
                </p>
            </motion.div>

            {/* Password */}
            <div className="relative mb-8 z-10 w-full max-w-[220px]">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {isUnlocked ? <Unlock size={18} className="text-green-500" /> : <Lock size={18} />}
                </div>

                <input
                    type="password"
                    maxLength={6}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="_ _ _ _ _ _"
                    className={`w-full py-4 pl-12 pr-4 bg-white rounded-2xl text-center text-xl tracking-[0.45em] font-bold outline-none border-2 transition-all ${
                        isUnlocked
                            ? "border-green-400 shadow-[0_0_14px_rgba(34,197,94,.25)]"
                            : "border-pink-200 focus:border-pink-400"
                    }`}
                />
            </div>

            {/* Button */}
            <AnimatePresence>
                {isUnlocked && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStart}
                        className="px-12 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white text-lg font-semibold rounded-full shadow-xl flex gap-2 z-20"
                    >
                        Let me tell you
                        <Heart size={18} fill="currentColor" />
                    </motion.button>
                )}
            </AnimatePresence>

        </div>
    )
}