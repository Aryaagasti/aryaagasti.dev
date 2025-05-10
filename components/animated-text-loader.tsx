"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AnimatedTextLoader() {
  const [loading, setLoading] = useState(true)
  const [textVisible, setTextVisible] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  const [loadingComplete, setLoadingComplete] = useState(false)

  // Text to be typed
  const text = "<aryaagasti/>"
  const typedTextRef = useRef("")
  const [displayText, setDisplayText] = useState("")

  // Handle typing animation
  useEffect(() => {
    if (!textVisible) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        typedTextRef.current = text.substring(0, currentIndex + 1)
        setDisplayText(typedTextRef.current)
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTypingComplete(true)

        // Wait a bit after typing completes
        setTimeout(() => {
          setLoadingComplete(true)

          // Wait a bit more before hiding the loader
          setTimeout(() => {
            setLoading(false)
          }, 1000)
        }, 1000)
      }
    }, 100) // Adjust typing speed here

    return () => clearInterval(typingInterval)
  }, [textVisible, text])

  // Start the sequence
  useEffect(() => {
    // Short delay before starting the typing animation
    const timer = setTimeout(() => {
      setTextVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Cursor blink animation
  const cursorVariants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
    static: {
      opacity: 1,
    },
  }

  // Container animations
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut", // Fixed: Using a valid easing function
      },
    },
  }

  // Glowing effect for completed text
  const glowVariants = {
    initial: {
      textShadow: "0 0 0px rgba(124, 58, 237, 0)",
    },
    glow: {
      textShadow: [
        "0 0 4px rgba(124, 58, 237, 0.5)",
        "0 0 8px rgba(124, 58, 237, 0.8)",
        "0 0 4px rgba(124, 58, 237, 0.5)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  }

  // Background circle animations
  const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut", // Fixed: Using a valid easing function
      },
    },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  // Completion animation
  const completionVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: [0, 1.2, 1],
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut", // Fixed: Using a valid easing function
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-background z-[100]"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Background circles */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border border-primary/10"
            variants={circleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full border border-primary/5"
            variants={circleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2 }}
          />

          <div className="relative flex flex-col items-center">
            {/* Terminal-like container */}
            <motion.div
              className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 w-80 sm:w-96 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, ease: "easeOut" }}
            >
              {/* Terminal header */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-center flex-1 text-foreground/60 font-mono">terminal</div>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-sm sm:text-base text-foreground/80 min-h-[100px] flex flex-col">
                <div className="flex">
                  <span className="text-primary">~$</span>
                  <span className="ml-2">init portfolio</span>
                </div>

                {textVisible && (
                  <div className="mt-2 flex">
                    <span className="text-primary">~$</span>
                    <div className="ml-2 flex">
                      <motion.span
                        variants={typingComplete ? glowVariants : {}}
                        initial="initial"
                        animate={typingComplete ? "glow" : "initial"}
                        className={`${typingComplete ? "text-primary font-bold" : ""}`}
                      >
                        {displayText}
                      </motion.span>

                      {/* Blinking cursor */}
                      <motion.span
                        variants={cursorVariants}
                        animate={typingComplete ? "static" : "blink"}
                        className="inline-block w-2 h-5 bg-foreground ml-0.5"
                      />
                    </div>
                  </div>
                )}

                {loadingComplete && (
                  <motion.div
                    className="mt-2 text-green-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Portfolio loaded successfully!
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Loading indicator */}
            {!loadingComplete && (
              <div className="mt-8 flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Completion checkmark */}
            {loadingComplete && (
              <motion.div
                className="mt-6 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"
                variants={completionVariants}
                initial="initial"
                animate="animate"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
