"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon, SunMoon } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-background border border-primary/20">
        <SunMoon className="h-6 w-6 text-primary" />
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full flex items-center justify-center bg-background border border-primary/20 overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full"
        animate={{
          rotate: isHovered ? 180 : 0,
        }}
        transition={{ duration: 1, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Sun icon */}
      <motion.div
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          opacity: theme === "dark" ? 0 : 1,
          scale: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.5, type: "spring" }}
        className="absolute"
      >
        <Sun className="h-6 w-6 text-yellow-500" />
      </motion.div>

      {/* Moon icon */}
      <motion.div
        animate={{
          rotate: theme === "dark" ? 0 : -180,
          opacity: theme === "dark" ? 1 : 0,
          scale: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.5, type: "spring" }}
        className="absolute"
      >
        <Moon className="h-6 w-6 text-blue-400" />
      </motion.div>

      {/* Stars (visible in dark mode) */}
      {theme === "dark" && (
        <>
          <motion.div
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{ top: "25%", left: "30%" }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
          />
          <motion.div
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{ top: "60%", left: "70%" }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.2 }}
          />
          <motion.div
            className="absolute h-0.5 w-0.5 rounded-full bg-white"
            style={{ top: "40%", left: "60%" }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.7 }}
          />
        </>
      )}

      {/* Sun rays (visible in light mode) */}
      {theme === "light" && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-4 bg-yellow-500 origin-left"
              style={{
                left: "50%",
                top: "50%",
                rotate: `${i * 45}deg`,
                translateX: "4px",
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  )
}
