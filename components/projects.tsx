"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "ResumePro",
    description: "AI-powered career development platform that helps users analyze and optimize their resumes, find job matches, generate tailored cover letters, and get personalized course recommendations. Final year MCA project made in collaboration with Anand Jugnake.",
    image: "/images/projects/resumepro.svg",
    technologies: ["Python", "Flask", "MongoDB", "React.js", "Bootstrap", "AI Integration"],
    github: "https://github.com/Aryaagasti/ResumePro-Resume-Analyzer-Career-Dashboard-",
    demo: "https://resumepro-resume-analyzer-career-snis.onrender.com",
  },
  {
    title: "Sorting Visualizer",
    description: "Interactive visualization tool for various sorting algorithms including Bubble Sort, Insertion Sort, and Selection Sort with search algorithms.",
    image: "/images/projects/sorting-visualizer.svg",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Algorithms"],
    github: "https://github.com/Aryaagasti/sorting-visualizer.io",
    demo: "https://sorting-visualizer-io.vercel.app/",
  },
  {
    title: "AmazonVista",
    description: "A comprehensive Amazon clone with modern UI, voice shopping, dark mode, and AI-powered product recommendations. Features include cart functionality, Stripe payments, and responsive design.",
    image: "/images/projects/amazonvista.svg",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Stripe", "AI Integration"],
    github: "https://github.com/Aryaagasti/AmazonVista",
    demo: "https://amazon-vista.vercel.app/",
  },
  {
    title: "Arya's TravelMate AI",
    description: "Your AI Travel Companion! Plan trips effortlessly with personalized recommendations. Discover destinations, create itineraries, and get real-time travel advice.",
    image: "/images/projects/ai-travel-planner.svg",
    technologies: ["React.js", "Node.js", "OpenAI", "Express.js", "MongoDB"],
    github: "https://github.com/Aryaagasti/Arya-s-AI-Travel-Planner",
    demo: "https://arya-s-ai-travel-planner.onrender.com/",
  },
  {
    title: "GreenRoute",
    description:
      "Sustainable route planner that helps users find eco-friendly transportation options and reduce carbon footprint.",
    image: "/images/projects/greenroute.svg",
    technologies: ["React.js", "Node.js", "Google Maps API", "MongoDB"],
    github: "https://github.com/Aryaagasti/GreenRoutes-Sustainable-Route-Planning-for-Commuters",
    demo: "https://greenroute.example.com",
  },
  {
    title: "Ecommerce Telegram Bot",
    description: "Telegram bot for Ecommerce app like zomoto add to cart feature is there and also strip payment integration also",
    image: "/images/projects/telegram-bot.svg",
    technologies: ["Node.js", "Telegram API", "MongoDB", "Express.js"],
    github: "https://github.com/Aryaagasti/Ecommercepayment",
    demo: "https://t.me/EcommerceMiniBot",
  },
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20">
      <SectionHeading title="My Projects" subtitle="Some of my recent work and personal projects" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-primary/5 border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
                {project.title !== "GreenRoute" && (
                  <Button variant="default" size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
