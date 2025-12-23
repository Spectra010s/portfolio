"use client"

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Image from "next/image"
import Footer from "@/components/Footer"
import { Github, ExternalLink, Star, GitFork, Eye, Twitter, Tiktok, Mail, MessageCircle, Code, Zap, Users, Shield, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pjs from "@/data/projects.json"


export default function Home() {
  
const params = useSearchParams();
const router = useRouter();
const pathname = usePathname();

const initialTab = params.get("tab") || "projects"

const [tab, setTab] = useState(initialTab);

useEffect(() => {

  router.push(`${pathname}?tab=${tab}`, { scroll: false });

}, [tab, router, pathname]);

const projects = pjs;

const scrollToPortfolio = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { label: "Total Repositories", value: "10+", icon: Code },
    { label: "GitHub Stars", value: "8+", icon: Star },
    { label: "Active Projects", value: "4", icon: Zap },
    { label: "Contributions", value: "277", icon: Users }
  ];

  const skills = [
    { name: "Frontend", items: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"] },
    { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
    { name: "Tools", items: ["Git", "Firebase", "Socket.IO", "Vercel"] },
    { name: "Web3", items: ["Blockchain", "DApps", "Smart Contracts", "Web3.js"] }
  ];

  const achievements = [
    { name: "Quickdraw", description: "Opened a pull request within 5 minutes of creation" },
    { name: "Pull Shark", description: "Opened pull requests in multiple repositories" },
    { name: "Pair Extraordinaire", description: "Collaborated on multiple projects" },
    { name: "YOLO", description: "Merged code without review" }
  ];

  return (
    <>
     <div className="min-h-screen flex flex-col flex-1
     
     bg-[#0a0a0c]
     bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
      {/* Hero Section */}
      
    <section className="text-white py-16 px-8 min-h-[85vh] ">
      <div className="max-w-4xl mx-auto">
        {/* Greeting */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
           <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                <img 
                  src="https://avatars.githubusercontent.com/u/197895409?v=4" 
                  alt="Spectra - Tayo"
                  className="relative w-32 h-32 rounded-full border-4 border-white/10 shadow-2xl"
                />
              </div>
              
              <div>
                <p className="text-blue-400 tracking-[0.3em] text-xs font-bold mb-2 uppercase">
                  Hello, I'm
                </p>
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
                Creative technologist exploring <span className="text-white">Web3 and hardware</span> • Mechatronist • Building innovative solutions with curiosity.
              </p>
              
              
         <div className="flex items-center gap-3 mb-10">  
            <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
            <p className="text-muted-foreground text-lg italic">Hardly working TBH</p>
          </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">
          <Button onClick={scrollToPortfolio} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
            View My Work
          </Button>
          <Button variant="default" className="border border-gray-700 hover:bg-gray-800 text-gray-300 px-8 py-3 rounded-full font-semibold transition-all">
            Get In Touch
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
                {[
                  { name: 'GitHub', icon: Github, href: 'https://github.com/Spectra010s' },
                  { name: 'Twitter', icon: Twitter, href: 'https://x.com/spectra010s' },
                  { name: 'LinkedIn', icon: Users, href: '#' },
                  { name: 'Tiktok', icon: Tiktok, href: 'https://tiktok.com/Spectra010s' }
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

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-xl hover:shadow-neutral-950/10 transition-all duration-300 hover:ease-in-out">
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

      {/* Navigation */}
      <section className="px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-12">
            <div className="bg-card border rounded-full p-1 shadow-lg">
              {["projects", "skills", "achievements"].map((active) => (
                <Button
                  key={active}
                  variant={active === tab ? "default" : "ghost"}
                  onClick={() => setTab(active)}
                  className="rounded-full px-6 capitalize"
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
        <section id="projects" className="py-8 md:px-6 px-3 ">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 w-full gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 ease-in-out w-full hover:scale-110">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 ">
                          <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">
                            {project.name}
                          </CardTitle>
                          <Badge variant="secondary">{project.category}</Badge>
                          <Badge variant={project.status === "Production" ? "default" : "outline"}>
                            {project.status}
                          </Badge>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {project.longDescription}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                        <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
       
        <Image
          src={project.screen || null}
          className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
          alt="project image"
        />
        </div>
        
                          </CardContent>
       <CardFooter className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground mx-15">
                    <div className="flex gap-4"> 
                        <div className="flex
                  items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                          {project.language}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button size="sm" asChild>
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
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.name} className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="mr-2 mb-2">
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

      {/* Achievements Section */}
      {tab === "achievements" && (
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.name} className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      {achievement.name}
                    </CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
   <Footer />
</>
  );
};
