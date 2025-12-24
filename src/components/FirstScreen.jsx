"use client"

import { motion } from "motion/react"
import { Heart, Sparkles, Timer } from "lucide-react"
import { useRef } from "react"

export default function FirstScreen({ onNext }) {
    const audioRef = useRef(null);

    const handleStartEverything = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log("Music play blocked:", e));
        }
        onNext();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-slate-50">
            
            {/* Background Music */}
            <audio ref={audioRef} src="/music/song.mp3" loop />

            {/* Background Decorations */}
            <div className="absolute top-10 left-10 animate-bounce">
                <Sparkles className="text-yellow-400 opacity-40" size={40} />
            </div>
            <div className="absolute bottom-10 right-10 animate-pulse">
                <Heart className="text-pink-300 opacity-40" size={40} />
            </div>

            {/* Main Animated Circle */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.4,
                }}
                className="mb-10 relative z-10"
            >
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 p-2 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-pink-50"></div>
                            <motion.div
                                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <img src="/gifs/hello.gif" className="w-36 md:w-44 -mb-4 drop-shadow-lg" alt="BFF" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mb-12 space-y-4 relative z-10"
            >
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-pink-100 text-pink-600 text-sm font-bold uppercase tracking-tighter mb-4"
                >
                    <Timer size={16} />
                    Since 24 Dec 2025 • 1:00 PM ✨
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl font-black bg-gradient-to-r from-yellow-500 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                >
                    The Start of <br/> Our New Era
                </motion.h1>

                <motion.p className="text-xl md:text-2xl font-medium text-gray-600 px-4">
                    Pata hai? Life has been different since that moment... <br/>
                    <span className="text-pink-500 font-bold italic text-lg">Sacchi! 💖</span>
                </motion.p>
            </motion.div>

            {/* Action Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartEverything}
                className="relative px-12 py-5 bg-gray-900 text-white text-xl font-bold rounded-3xl shadow-2xl overflow-hidden group border-b-4 border-black/20 z-20"
            >
                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                    Let's Begin the Era 🎶
                    <Heart size={24} fill="white" className="animate-pulse" />
                </span>
            </motion.button>

        </div>
    )
}
