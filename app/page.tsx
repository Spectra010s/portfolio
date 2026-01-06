"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import Image from "next/image"
import Footer from "@/components/Footer"
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Twitter,
  TicketIcon as Tiktok,
  Code,
  Zap,
  Users,
  Shield,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import pjs from "@/data/projects.json"

export default function Home() {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const initialTab = params.get("tab") || "projects"

  const [tab, setTab] = useState(initialTab)

  useEffect(() => {
    router.push(`${pathname}?tab=${tab}`, { scroll: false })
  }, [tab, router, pathname])

  const projects = pjs

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio-content")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const totalstars = projects.reduce((sum, project) => sum + project.stars, 0);
  
  
  const stats = [
    { label: "Total Repositories", value: "10+", icon: Code },
    { label: "GitHub Stars", value: totalstars.toString(), icon: Star },
    { label: "Active Projects", value: "4", icon: Zap },
    { label: "Contributions", value: "277", icon: Users },
  ]

  const skills = [
    { name: "Frontend", items: ["React", "Nextjs", "TypeScript", "HTML/CSS", "Tailwind CSS"] },
    { name: "Languages", items: ["Typescript", "JavaScipt", "Python", "C++", "HTML", "CSS", "Nodejs", "PlpgSQL"]},
    { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "MySQL"] },
    { name: "Tools", items: ["Git", "Github", "Supabase", "Acode", "Firebase", "Socket.IO", "Vercel"] },
    { name: "Web3", items: ["Blockchain", "DApps", "Smart Contracts", "Web3.js"] },
  ]

  return (
    <>
      <div className="min-h-screen flex flex-col flex-1 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <section className="text-white py-12 px-8 h-screen relative z-10 flex items-center">
          <div className="max-w-4xl mx-auto">
            {/* Greeting */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                <img
                  src="/s.jpeg"
                  alt="Spectra - Tayo"
                  className="relative w-32 h-32 rounded-full border-4 border-white/10 shadow-2xl"
                />
              </div>

              <div>
                <p className="text-blue-400 tracking-[0.3em] text-xs font-bold mb-2 uppercase">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Adeloye Adetayo
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-200">
                  Spectra010s <span className="text-gray-500 font-normal">| Full Stack Developer</span>
                </h2>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <span>📍</span>
              <span>Ekiti, Nigeria</span>
            </div>

            {/* Bio */}
            <p className="text-gray-400 text-xl leading-relaxed">
              Creative technologist exploring <span className="text-white">Web3 and hardware</span> • Mechatronist •
              Building innovative solutions with curiosity.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <p className="text-muted-foreground text-lg italic">Hardly working TBH</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-12">
              <Button
                onClick={scrollToPortfolio}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                View My Work
              </Button>
              <Button
                variant="default"
                className="border border-gray-700 hover:bg-gray-800 text-gray-300 px-8 py-3 rounded-full font-semibold transition-all"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "GitHub", icon: Github, href: "https://github.com/Spectra010s" },
                { name: "Twitter", icon: Twitter, href: "https://x.com/spectra010s" },
                { name: "LinkedIn", icon: Users, href: "#" },
                { name: "Tiktok", icon: Tiktok, href: "https://tiktok.com/Spectra010s" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-[#111113] border border-gray-800 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:border-gray-600 transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-6 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl hover:shadow-neutral-950/10 transition-all duration-300 hover:ease-in-out"
                >
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 relative z-10" id="portfolio-content">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-center mb-12">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-2xl">
                {["projects", "skills"].map((active) => (
                  <Button
                    key={active}
                    variant={active === tab ? "default" : "ghost"}
                    onClick={() => setTab(active)}
                    className={`rounded-full px-6 capitalize transition-all duration-200 ${
                      active === tab
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/50"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {active}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {tab === "projects" && (
          <section className="py-8 md:px-6 px-3 relative z-10 ">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8 w-full gap-8">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 ease-in-out w-full hover:-translate-y-2 border-white/10 hover:border-blue-400/60 bg-white/[0.02] backdrop-blur-xl"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 ">
                            <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                              {project.name}
                            </CardTitle>
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                              {project.category}
                            </Badge>
                            <Badge
                              variant={project.status === "Production" ? "default" : "outline"}
                              className={
                                project.status === "Production"
                                  ? "bg-green-500/20 text-green-300 border-green-500/30"
                                  : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <CardDescription className="text-base leading-relaxed text-gray-300">
                            {project.longDescription}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-white/20 text-gray-300 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full rounded-sm overflow-hidden border border-white/10 bg-slate-900 group-hover:border-blue-500/30 transition-colors duration-300">
                        {project.demo ? (
                          <Image
                            src={`https://v1.screenshot.11ty.dev/${encodeURIComponent(project.demo)}/opengraph/_wait:5`}
                            alt={`${project.name} preview`}
                            width={1200}
                            height={675}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                            <Globe className="w-16 h-16 text-muted-foreground/30" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground mx-15">
                      <div className="flex gap-4 text-gray-400">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all"></div>
                          {project.language}
                        </div>
                        <div className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 md:mt-0">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-white/20 hover:border-white/40 hover:bg-white/10 bg-transparent"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            asChild
                            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {tab === "skills" && (
          <section className="py-8 px-6 relative z-10 ">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skillGroup) => (
                  <Card
                    key={skillGroup.name}
                    className="hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-blue-500/50"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{skillGroup.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {skillGroup.items.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="mr-2 mb-2 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  )
}
