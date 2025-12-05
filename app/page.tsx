'use client'

import Blog from "@/components/Homepage/Blog"
import Cta from "@/components/Homepage/Cta"
import Experience from "@/components/Homepage/Experience"
import Experiments from "@/components/Homepage/Experiments"
import Hero from "@/components/Homepage/Hero"
import Projects from "@/components/Homepage/Projects"
import Skills from "@/components/Homepage/Skills"
import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Experiments />
      <Cta />
      <Footer />
    </div>
  )
}

