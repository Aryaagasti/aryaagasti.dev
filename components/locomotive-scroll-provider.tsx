"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

interface LocomotiveScrollProviderProps {
  children: ReactNode
}

export function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Use a ref to store the scroll instance
  const scrollInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    let scrollInstance: any = null

    // Simple smooth scroll fallback
    const enableNativeSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth"
    }

    const initScroll = async () => {
      try {
        // For Locomotive Scroll v5 beta, we need to use a different import approach
        const LocomotiveScroll = (await import("locomotive-scroll")).default

        // Make sure the container exists
        if (!containerRef.current) {
          enableNativeSmoothScroll()
          return
        }

        // Initialize with minimal options to avoid errors
        scrollInstance = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          // Minimal configuration to avoid potential issues
          smoothMobile: true,
          inertia: 0.3,
        })

        // Store the instance in the ref
        scrollInstanceRef.current = scrollInstance

        // Make it available globally for debugging and other components
        window.__locomotiveScroll = scrollInstance

        // Add resize handler with proper error checking
        const handleResize = () => {
          if (scrollInstance && typeof scrollInstance.update === "function") {
            scrollInstance.update()
          }
        }

        window.addEventListener("resize", handleResize)

        return () => {
          window.removeEventListener("resize", handleResize)
          if (scrollInstance && typeof scrollInstance.destroy === "function") {
            scrollInstance.destroy()
          }
          window.__locomotiveScroll = null
        }
      } catch (error) {
        console.error("Failed to initialize smooth scroll:", error)
        enableNativeSmoothScroll()
      }
    }

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initScroll()
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, []) // Empty dependency array to run only once

  // Handle route changes
  useEffect(() => {
    // Small delay to ensure DOM is updated after route change
    const timer = setTimeout(() => {
      if (scrollInstanceRef.current && typeof scrollInstanceRef.current.update === "function") {
        try {
          scrollInstanceRef.current.update()
        } catch (error) {
          console.error("Error updating scroll after route change:", error)
        }
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div ref={containerRef} data-scroll-container className="min-h-screen">
      {children}
    </div>
  )
}
