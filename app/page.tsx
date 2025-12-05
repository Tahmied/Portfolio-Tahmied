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
import ContactModal from "@/components/ContactModal"
import { useState } from "react"
import './globals.css'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div>
      <Header />
      <Hero openContact={openContact} />

      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Experiments />
      <Cta openContact={openContact} />
      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  )
}

