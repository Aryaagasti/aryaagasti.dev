"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple two-column grid with proper spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile image column - centered on mobile, left-aligned on desktop */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-md"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {/* Profile image */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/images/myprofileimage.svg"
                  alt="Arya Agasti"
                  width={256}
                  height={256}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text content column */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hi all, I&apos;m{" "}
              <motion.span
                className="text-primary"
                animate={{
                  color: ["hsl(var(--primary))", "hsl(280, 100%, 70%)", "hsl(var(--primary))"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Arya
              </motion.span>{" "}
              <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h1>

            {/* Animated typing text */}
            <div className="text-xl md:text-2xl font-semibold mb-6 h-20">
              <TypeAnimation
                sequence={[
                  "A passionate Full Stack Developer 🚀",
                  1000,
                  "MERN Stack Specialist 💻",
                  1000,
                  "Backend Developer with Node.js 🔧",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-foreground/90"
              />
            </div>

            {/* Description text */}
            <p className="text-foreground/70 text-lg mb-8 max-w-xl">
              Having experience building web apps using React.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-background border border-primary text-primary rounded-full font-medium"
              >
                View Projects
              </motion.a>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-16">
          <motion.div
            className="w-8 h-12 border-2 border-primary rounded-full flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full"
              animate={{
                y: [0, 15, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
