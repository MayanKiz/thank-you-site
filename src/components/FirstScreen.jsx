"use client"

import { motion, AnimatePresence } from "motion/react"
import { Heart, Sparkles, Timer, Lock, Unlock, Play } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function FirstScreen({ onNext }) {
    const audioRef = useRef(null);
    const [password, setPassword] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    const correctPass = "051009";

    // 1. Countdown Logic (Since 24 Dec 2025, 1:00 PM)
    useEffect(() => {
        const startDate = new Date("2025-12-24T13:00:00");
        
        const timer = setInterval(() => {
            const now = new Date();
            const diff = now - startDate;

            setTimeElapsed({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                mins: Math.floor((diff / 1000 / 60) % 60),
                secs: Math.floor((diff / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // 2. Password Check
    useEffect(() => {
        if (password === correctPass) {
            setIsUnlocked(true);
        } else {
            setIsUnlocked(false);
        }
    }, [password]);

    const handleStartEverything = () => {
        if (isUnlocked) {
            if (audioRef.current) {
                audioRef.current.play().catch(e => console.log("Music play blocked:", e));
            }
            onNext();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-[#fffafa]">
            
            <audio ref={audioRef} src="/gifs/Aaj-Se-Teri-Slowed-Reverb-Arijit-Singh-Padman-Akshay-Kumar-R.m4a" loop />

            {/* Countdown Display */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-8 w-full flex flex-col items-center gap-1 z-20"
            >
                <div className="flex items-center gap-2 text-pink-500 font-bold text-xs tracking-widest uppercase">
                    <Timer size={14} /> Our Era Duration
                </div>
                <div className="flex gap-3 text-gray-800 font-black text-xl">
                    <div className="flex flex-col"><span>{timeElapsed.days}d</span></div>
                    <div className="flex flex-col"><span>{timeElapsed.hours}h</span></div>
                    <div className="flex flex-col"><span>{timeElapsed.mins}m</span></div>
                    <div className="flex flex-col text-pink-600"><span>{timeElapsed.secs}s</span></div>
                </div>
            </motion.div>

            {/* GIF circle */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mb-8 relative z-10"
            >
                <div className="relative w-44 h-44 md:w-52 md:h-52">
                    <div className="absolute inset-0 bg-pink-200 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full bg-white p-2 shadow-xl border-2 border-pink-100">
                        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                            <img src="/gifs/hello.gif" className="w-32 md:w-40" alt="BFF" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Text Content */}
            <div className="mb-8 space-y-2 z-10">
                <h1 className="text-4xl font-black text-gray-900 leading-tight">
                    The New Era <br/>
                    <span className="text-pink-500">Begins Here.</span>
                </h1>
                <p className="text-gray-500 font-medium">Enter the secret code to proceed...</p>
            </div>

            {/* Password Field */}
            <div className="relative mb-10 z-10 w-full max-w-[240px]">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {isUnlocked ? <Unlock size={20} className="text-green-500" /> : <Lock size={20} />}
                </div>
                <input 
                    type="password"
                    maxLength={6}
                    placeholder="_ _ _ _ _ _"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full py-4 pl-12 pr-4 bg-white border-2 rounded-2xl text-center text-2xl tracking-[0.5em] font-bold outline-none transition-all ${
                        isUnlocked ? "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]" : "border-pink-100 focus:border-pink-400"
                    }`}
                />
            </div>

            {/* Action Button */}
            <AnimatePresence>
                {isUnlocked && (
                    <motion.button
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStartEverything}
                        className="relative px-12 py-5 bg-pink-600 text-white text-xl font-bold rounded-2xl shadow-lg flex items-center gap-3 z-20"
                    >
                        Begin Experience
                        <Play size={20} fill="white" />
                    </motion.button>
                )}
            </AnimatePresence>

            <div className="absolute bottom-6 text-gray-300 text-[10px] tracking-widest uppercase font-bold">
                Established 24.12.2025 • 13:00
            </div>
        </div>
    )
}
