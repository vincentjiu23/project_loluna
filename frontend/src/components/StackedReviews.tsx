"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function StackedReviews() {
  // We use an array of objects to maintain unique keys for Framer Motion
  const [cards, setCards] = useState([
    { id: 1, src: "/images/Section 6/Review_Anisa.png" },
    { id: 2, src: "/images/Section 6/Review_Aurel.png" },
    { id: 3, src: "/images/Section 6/Review_Ayu.png" },
  ]);

  const handleNext = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      if (first) newCards.push(first);
      return newCards;
    });
  };

  return (
    <div className="relative w-56 h-[340px] md:w-64 md:h-[420px] cursor-pointer group shrink-0" onClick={handleNext}>
      {cards.map((card, index) => {
        const isFront = index === 0;
        
        return (
          <motion.div
            key={card.id}
            layout
            initial={false}
            animate={{
              top: index * 12, // offset down
              right: index * -12, // offset right
              scale: 1 - index * 0.05, // scale down
              zIndex: 10 - index,
              opacity: 1 - index * 0.1,
              rotate: index === 0 ? 0 : index === 1 ? 3 : -3, // slight rotation for stacked effect
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden border-4 border-white origin-center bg-surface"
          >
            <img src={card.src} alt={`Review ${card.id}`} className="w-full h-full object-cover" />
            
            {/* Show click instruction only on the front card */}
            {isFront && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white/90 text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">swipe</span> Click to Swipe
                </span>
              </div>
            )}
          </motion.div>
        );
      })}

      {/* +3M Badge on the edge */}
      <div className="absolute -right-6 -bottom-6 md:-right-8 md:-bottom-8 w-20 h-20 md:w-24 md:h-24 bg-[#FFD700] text-[#0A4B64] rounded-full shadow-xl border-4 border-white flex flex-col items-center justify-center z-50 pointer-events-none hover:scale-105 transition-transform">
        <span className="text-xl md:text-2xl font-black">+3M</span>
        <span className="text-[9px] md:text-[10px] font-bold text-center mt-0.5 leading-tight">Happy<br/>Moms</span>
      </div>
    </div>
  );
}
