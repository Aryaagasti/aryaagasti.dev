import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"
import AnimatedTextLoader from "@/components/animated-text-loader"
import SplashCursor from "@/components/splash-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <AnimatedTextLoader />
      <SplashCursor />
      <Navbar />
      <ScrollIndicator />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Skills />
        <Achievements />
        <Experience />
        <Projects />
        <Resume />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
