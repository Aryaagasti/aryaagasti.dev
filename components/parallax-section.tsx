"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useScrollObserver } from "./scroll-observer"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export default function ParallaxSection({
  children,
  speed = 0.2,
  direction = "up",
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScrollObserver()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const upTransform = useTransform(scrollYProgress, [0, 1], ["0%", `-${speed * 100}%`])
  const downTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const leftTransform = useTransform(scrollYProgress, [0, 1], ["0%", `-${speed * 100}%`])
  const rightTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  // Calculate transform based on direction
  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return upTransform
      case "down":
        return downTransform
      case "left":
        return leftTransform
      case "right":
        return rightTransform
      default:
        return upTransform
    }
  }

  const y = direction === "up" || direction === "down" ? getTransformValue() : "0%"
  const x = direction === "left" || direction === "right" ? getTransformValue() : "0%"

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y, x }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
