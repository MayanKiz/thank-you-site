"use client"

import { motion } from "motion/react"
import { useState, useEffect, useRef } from "react"
import { Heart, Sparkles, Star } from "lucide-react"

export default function FourthScreen({ onShowOverlay }) {
  const [displayedText, setDisplayedText] = useState("")
  const [showButton, setShowButton] = useState(false)
  const scrollRef = useRef(null)

  // Super lovey-dovey Hinglish message
  const specialMessage = `To my favorite person,

Wese toh hum kal hi Best Friends Forever bane hain, par sacchi bolu toh aisa lagta hai jaise main tumhe bachpan se jaanta hoon. Pata nahi kaise, par itni jaldi tum mere liye itni special ho gayi ki ab tumhare bina din adhura lagta hai.

I know tum mujhse zyada pyaar karti ho, aur tumhari yahi care aur wo cute si baatein mera din bana deti hain. You are literally the best thing that ever happened to me. Tumhare saath rehna, tumse baat karna... it feels like a beautiful dream.

Mere paas words nahi hain samjhane ke liye ki tum mere liye kya ho. Bas itna samajh lo ki tum meri "Bestie" bhi ho, meri "Soulmate" bhi aur mera sab kuch bhi. I love you so much, more than I can ever say in words.

Hamesha aise hi rehna, mere saath... mere paas. Because I never want to lose this.`

  const endingText = "Ab ek aakhri baat..."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < specialMessage.length) {
        setDisplayedText(specialMessage.slice(0, index + 1))
        index++

        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
      } else {
        clearInterval(timer)
        setTimeout(() => setShowButton(true), 500)
      }
    }, 45)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-[#fff5f7]">

      {/* message container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl mb-12 relative z-10"
      >
        <div className="relative">
          {/* Animated Icons */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, 20, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-8 -left-4 text-pink-500 z-20"
          >
            <Heart size={40} fill="currentColor" />
          </motion.div>

          <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(236,72,153,0.2)] border-2 border-pink-100 relative overflow-hidden">
            {/* Soft pink glow inside */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-200/30 rounded-full blur-3xl"></div>
            
            <div
              ref={scrollRef}
              className="h-96 overflow-y-auto pr-2 custom-scrollbar relative z-10"
              style={{ scrollBehavior: "smooth" }}
            >
              <p className="text-gray-800 leading-relaxed text-xl md:text-2xl font-medium italic">
                {displayedText}
                {displayedText.length !== specialMessage.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1.5 h-6 bg-pink-500 ml-1 align-middle"
                  />
                )}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ending text and button */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <motion.p
            className="text-pink-600 text-2xl mb-6 font-bold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {endingText} ✨
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShowOverlay}
            className="px-14 py-5 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-2xl font-black rounded-full shadow-[0_15px_30px_rgba(236,72,153,0.4)] flex items-center gap-3"
          >
            Click Karo! 💖
          </motion.button>
        </motion.div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fbcfe8;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}
