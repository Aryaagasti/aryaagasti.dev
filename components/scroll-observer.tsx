"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface ScrollObserverContextType {
  scrollY: number
  scrollDirection: "up" | "down" | null
}

const ScrollObserverContext = createContext<ScrollObserverContextType>({
  scrollY: 0,
  scrollDirection: null,
})

export const useScrollObserver = () => useContext(ScrollObserverContext)

export default function ScrollObserver({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up")
      setLastScrollY(currentScrollY)
      setScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY])

  return (
    <ScrollObserverContext.Provider value={{ scrollY, scrollDirection }}>{children}</ScrollObserverContext.Provider>
  )
}
