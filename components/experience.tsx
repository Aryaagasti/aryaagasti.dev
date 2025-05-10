"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Node.js Developer Intern",
    company: "Talentrise Technokrate Pvt. Ltd.",
    period: "Feb 2025 - May 2025",
    description:
      "Built and maintained RESTful APIs for client applications aligned with Figma UI designs. Developed secure backend services using Node.js, Express.js, and MongoDB. Implemented authentication using JWT and integrated Nodemailer for notifications.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Postman", "GitHub"],
  },
  {
    title: "Project Trainee",
    company: "IT NetworkZ Infosystems Pvt Ltd",
    period: "Oct 2024 - Mar 2025",
    description:
      "Contributed to an AI-powered ATS-Friendly Resume Feedback System with NLP-based scoring. Worked on backend development using Python (Flask) and integrated Gemini AI API. Implemented core logic for resume scoring and job match analysis.",
    skills: ["Python", "Flask", "MongoDB", "React.js", "Gemini AI", "REST APIs"],
  },
  {
    title: "Web Developer",
    company: "IndiaOPD",
    period: "Jun 2023 - Jul 2023",
    description:
      "Designed and developed various types of websites for healthcare clients. Converted UI designs into responsive HTML/CSS implementations. Collaborated with design team to ensure pixel-perfect implementation.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <SectionHeading title="Work Experience" subtitle="My professional journey and work history" />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-px"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative mb-12 md:mb-16 ${
              index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0" : "md:pl-12"
            } md:w-1/2`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-auto md:right-0 top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 transform md:translate-x-2"></div>

            <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>

                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-4 text-foreground/70">
                  <Briefcase className="h-4 w-4" />
                  <span>{exp.company}</span>
                </div>

                <p className="mb-4 text-foreground/80">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-primary/5 border-primary/20">
                      {skill}
                    </Badge>
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
