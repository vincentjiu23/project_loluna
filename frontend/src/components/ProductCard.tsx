"use client";

import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  onClick: () => void;
}

export default function ProductCard({ id, name, description, price, image, badge, onClick }: ProductCardProps) {
  return (
    <div onClick={onClick} className="block h-full cursor-pointer">
      <motion.div
        whileHover="hover"
        className="glass-panel rounded-[2rem] p-8 flex flex-col items-center text-center relative h-full group border border-outline-variant/20 hover:border-primary/30 transition-colors shadow-sm hover:shadow-xl"
      >
        {badge && (
          <div className="absolute top-6 left-6 z-10 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold shadow-sm tracking-wide">
            {badge}
          </div>
        )}
        
        <div className="w-full aspect-square mb-8 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/5 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 blur-2xl"></div>
          <motion.img 
            variants={{
              hover: { y: -10, scale: 1.05 }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            src={image} 
            alt={name} 
            className="object-contain w-[85%] h-[85%] relative z-10 drop-shadow-xl" 
          />
        </div>
        
        <h3 className="font-bold text-xl md:text-2xl text-primary mb-3 group-hover:text-secondary-fixed transition-colors leading-tight">
          {name}
        </h3>
        
        <p className="text-on-surface-variant font-medium tracking-wide flex-grow">
          {description}
        </p>
        
        <div className="mt-8 overflow-hidden">
          <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Discover Details <span className="material-symbols-outlined text-sm">east</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
