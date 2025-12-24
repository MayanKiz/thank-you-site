"use client"

import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import { Heart, Star, Sparkles, Zap, Coffee, ArrowRight } from "lucide-react"
import "swiper/css"
import "swiper/css/effect-cards"

export default function SecondScreen({ onNext }) {
  const thankYouCards = [
    {
      text: "Thank you for making 'yesterday' the start of our forever story!",
      icon: Heart,
      gradient: "from-pink-400 via-rose-500 to-red-500",
      glow: "shadow-pink-500/50",
      iconColor: "text-white",
    },
    {
      text: "Thank you for being the kind of person who matches my energy perfectly ✨",
      icon: Zap,
      gradient: "from-blue-400 via-indigo-500 to-violet-600",
      glow: "shadow-indigo-500/50",
      iconColor: "text-white",
    },
    {
      text: "Thank you for the endless laughs we've already had in just 24 hours!",
      icon: Sparkles,
      gradient: "from-amber-400 via-orange-500 to-yellow-500",
      glow: "shadow-orange-500/50",
      iconColor: "text-white",
    },
    {
      text: "Thank you for making me feel like I've known you for years already.",
      icon: Coffee,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      glow: "shadow-teal-500/40",
      iconColor: "text-white",
    },
    {
      text: "Thank you for being the coolest best friend I could ever ask for!",
      icon: Star,
      gradient: "from-purple-400 via-fuchsia-500 to-pink-600",
      glow: "shadow-purple-500/50",
      iconColor: "text-white",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-white/50">

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10 relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent leading-tight mb-4"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Just a few things...
        </motion.h2>
        <p className="text-gray-500 font-medium">Swipe through these cards! 👉</p>
      </motion.div>

      {/* cards container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-xs mb-10 relative z-10"
      >
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full h-96"
          cardsEffect={{
            perSlideOffset: 10,
            perSlideRotate: 4,
            rotate: true,
            slideShadows: true,
          }}
        >
          {thankYouCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <SwiperSlide key={index} className="overflow-hidden rounded-[2rem]">
                <div
                  className={`w-full h-full bg-gradient-to-br ${card.gradient} p-8 flex flex-col items-center justify-center text-center shadow-2xl ${card.glow} relative`}
                >
                  {/* Decorative Sparkles background */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping" />
                    <div className="absolute bottom-20 right-10 w-3 h-3 bg-white rounded-full animate-pulse" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`mb-8 p-5 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <IconComponent size={40} className="text-white" />
                  </motion.div>

                  {/* Text */}
                  <h3 className="text-2xl font-bold text-white leading-snug drop-shadow-md">
                    {card.text}
                  </h3>
                  
                  <div className="mt-8 text-white/60 text-sm font-bold tracking-widest uppercase">
                    BFF Forever
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>

      {/* button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="relative px-12 py-4 bg-gray-900 text-white text-lg font-bold rounded-2xl shadow-xl flex items-center gap-3 group"
      >
        There's more...
        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
      </motion.button>
    </div>
  )
}
