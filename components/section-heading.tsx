"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">{title}</span>
      </h2>
      {subtitle && <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
    </motion.div>
  )
}
