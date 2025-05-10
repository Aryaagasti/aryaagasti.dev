"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "KDK College, RTMNU",
    period: "2023 - 2025",
    description: "Specializing in advanced software development and system architecture.",
    achievement: "Currently pursuing",
  },
  {
    degree: "Bachelor of Commerce with Computer Applications (BCCA)",
    institution: "RTMNU University",
    period: "2020 - 2023",
    description: "Focused on business applications of computer science and information technology.",
    achievement: "CGPA 7.51",
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "State Board",
    period: "2019 - 2020",
    description: "Science stream with focus on mathematics and computer science.",
    achievement: "79%",
  },
  {
    degree: "Secondary Education (10th)",
    institution: "State Board",
    period: "2017 - 2018",
    description: "Completed with distinction in mathematics and science.",
    achievement: "66%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <SectionHeading title="Education" subtitle="My academic background and qualifications" />

      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-foreground/70 mb-2">{edu.institution}</p>

                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">{edu.period}</span>
                    </div>

                    <p className="text-foreground/80 mb-2">{edu.description}</p>

                    <div className="flex items-center gap-2 text-primary">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">{edu.achievement}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
