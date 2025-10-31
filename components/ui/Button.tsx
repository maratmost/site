'use client'

import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full font-bold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-white text-primary-600 hover:shadow-xl focus:ring-primary-500',
    secondary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 focus:ring-white',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

