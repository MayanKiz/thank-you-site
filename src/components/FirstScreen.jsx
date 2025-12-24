"use client"

import { motion } from "motion/react"
import { Heart, Sparkles } from "lucide-react"

export default function FirstScreen({ onNext }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-slate-50">
            
            {/* Animated Background Decorations */}
            <div className="absolute top-10 left-10 animate-bounce">
                <Sparkles className="text-yellow-400 opacity-50" size={40} />
            </div>
            <div className="absolute bottom-10 right-10 animate-pulse">
                <Heart className="text-pink-300 opacity-50" size={40} />
            </div>

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
                className="mb-10 relative z-10 will-change-transform"
            >
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                    {/* BFF Glow Layers - Using Yellows and Pinks */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                    
                    {/* Main Container */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 p-2 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                            {/* Inner soft glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-pink-50 rounded-full"></div>

                            {/* Center gif with animation */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <img 
                                    src="/gifs/hello.gif" 
                                    className="w-36 md:w-44 -mb-4 drop-shadow-lg" 
                                    alt="happy bff" 
                                />
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
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold uppercase tracking-widest mb-2"
                >
                    Since Yesterday... ✨
                </motion.span>
                
                <motion.h1
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    style={{ backgroundSize: "200% 200%" }}
                >
                    To My Newest <br/> Best Friend Forever
                </motion.h1>
                
                <motion.p
                    className="text-xl md:text-2xl font-medium text-gray-600 px-4"
                >
                    I have something really sweet to tell you...
                </motion.p>
            </motion.div>

            {/* Action Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="relative px-12 py-5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white text-xl font-bold rounded-2xl shadow-[0_10px_30px_rgba(236,72,153,0.3)] overflow-hidden group border-b-4 border-black/10"
            >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                    Click here, Bestie! 
                    <Heart size={24} fill="white" className="animate-pulse" />
                </span>
            </motion.button>

        </div>
    )
}
