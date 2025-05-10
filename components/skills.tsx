"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Server, Globe } from "lucide-react"

const skills = [
  { name: "JavaScript", level: 90, icon: Code, category: "Frontend" },
  { name: "React.js", level: 85, icon: Code, category: "Frontend" },
  { name: "Node.js", level: 95, icon: Server, category: "Backend" },
  { name: "Express.js", level: 90, icon: Server, category: "Backend" },
  { name: "MongoDB", level: 85, icon: Database, category: "Database" },
  { name: "Python", level: 75, icon: Code, category: "Programming" },
  { name: "Flask", level: 70, icon: Server, category: "Backend" },

]

const categories = ["Frontend", "Backend", "Database", "Programming"]

export default function Skills() {
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
    <section id="skills" className="py-20">
      <SectionHeading title="My Skills" subtitle="Technologies and programming languages I work with" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <motion.div
            key={category}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="overflow-hidden border-primary/10 shadow-lg">
              <div className="bg-primary/5 p-4 border-b border-primary/10">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {category === "Frontend" && <Globe className="h-5 w-5 text-primary" />}
                  {category === "Backend" && <Server className="h-5 w-5 text-primary" />}
                  {category === "Database" && <Database className="h-5 w-5 text-primary" />}
                  {category === "Programming" && <Code className="h-5 w-5 text-primary" />}
                  {category}
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <motion.div key={skill.name} variants={item} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-foreground/70">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
