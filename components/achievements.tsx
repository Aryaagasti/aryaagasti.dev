"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, Trophy, Code } from "lucide-react"

const achievements = [
   {
    title: "Published Research Paper",
    description: "EduConnect App – A mobile app connecting students and educators.",
    icon: Award,
  },
  {
    title: "National Conference Award",
    description: "Received award for Spark EduConnect at a national-level conference at KDK College.",
    icon: Trophy,
  },
  {
    title: "Green AI Skilling & Certification",
    description: "Completed 1-month training and received certification from Edunet Foundation for GreenRoute – an AI-powered sustainable route planner under the AICTE-Green AI initiative.",
    icon: Code,
  },
  {
    title: "Hackathon & Freelance Opportunity",
    description: "Participated in Vibe Coding Hackathon and earned a freelance opportunity for outstanding performance.",
    icon: Briefcase,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <SectionHeading title="Achievements" subtitle="Key milestones in my professional journey" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-foreground/70">{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
