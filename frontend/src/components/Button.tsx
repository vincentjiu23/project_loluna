"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-colors";
  
  const variantClasses = {
    primary: "bg-primary text-on-primary shadow-lg hover:shadow-primary/30",
    secondary: "bg-secondary-container text-on-secondary-container shadow-lg hover:shadow-secondary-container/30",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    text: "text-primary hover:bg-primary/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
