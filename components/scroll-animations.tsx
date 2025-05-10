"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: "fade" | "slide" | "scale" | "none"
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}

export function ScrollAnimation({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, isInView, once])

  // Define animation variants
  const variants = {
    hidden: {
      opacity: animation !== "none" ? 0 : 1,
      y: animation === "slide" ? 20 : 0,
      scale: animation === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, delay = 0, duration = 0.5, once = true, className = "" }) {
  return (
    <ScrollAnimation animation="fade" delay={delay} duration={duration} once={once} className={className}>
      {children}
    </ScrollAnimation>
  )
}

export function SlideUp({ children, delay = 0, duration = 0.5, once = true, className = "" }) {
  return (
    <ScrollAnimation animation="slide" delay={delay} duration={duration} once={once} className={className}>
      {children}
    </ScrollAnimation>
  )
}

export function ScaleIn({ children, delay = 0, duration = 0.5, once = true, className = "" }) {
  return (
    <ScrollAnimation animation="scale" delay={delay} duration={duration} once={once} className={className}>
      {children}
    </ScrollAnimation>
  )
}
