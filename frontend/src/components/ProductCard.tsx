"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

export default function ProductCard({ id, name, description, price, image, badge }: ProductCardProps) {
  return (
    <motion.div
      whileHover="hover"
      className="glass-panel rounded-2xl p-6 flex flex-col relative h-full group"
    >
      {badge && (
        <div className="absolute top-6 left-6 z-10 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold shadow-md">
          {badge}
        </div>
      )}
      
      <div className="bg-surface-container-lowest rounded-xl mb-6 aspect-square overflow-hidden flex items-center justify-center p-4 relative">
        <motion.img 
          variants={{
            hover: { scale: 1.1 }
          }}
          transition={{ duration: 0.4 }}
          src={image} 
          alt={name} 
          className="object-contain w-full h-full" 
        />
        <motion.div 
          className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity"
          variants={{
            hover: { opacity: 1 }
          }}
        />
      </div>
      
      <h3 className="font-bold text-xl text-primary mb-2 group-hover:text-primary-container transition-colors">{name}</h3>
      <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 flex-grow">{description}</p>
      
      <div className="flex justify-between items-center mt-auto">
        <span className="text-2xl font-bold text-primary-container">{price}</span>
        
        <Link href={`/products/${id}`}>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-container hover:text-primary transition-colors shadow-lg"
          >
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
