'use client'

import { useEffect } from 'react'
import Header from '../../components/Header'
import '../globals.css'
import Link from 'next/link'

export default function Projects() {
  useEffect(() => {
    // Blur effect
    setTimeout(() => {
      const mainContent = document.getElementById('main-content')
      if (mainContent) {
        mainContent.classList.remove('blurred')
      }
    }, 500)
  }, [])

  return (
    <div className="blurred" id="main-content">
      <Header />

      <section className="experiments">
        <div id="experiments-header" className="section-header !mt-8">
          <h1 className="section-title"> Projects</h1>
          <p className="section-subtitle !mt-2 !mb-4">
            All My Projects
          </p>
        </div>
        <div className="experiments-container">

          <Link href={'https://www.gimbalsinsider.com'}>
            <div className="experiment-item">
              <div
                className="image-container"
                style={{ backgroundImage: "url('/media/task management system.png')" }}
              >
                <div className="text-overlay">
                  <div className="title">
                    Gimbals Insider
                  </div>
                  <div className="subtitle">Custom Wordpress Theme</div>
                </div>
              </div>
            </div>
          </Link>

          <Link href={'https://mentor-faf09.web.app/'}>
            <div className="experiment-item">
              <div
                className="image-container"
                style={{ backgroundImage: "url('/media/mentor.png')" }}
              >
                <div className="text-overlay">
                  <div className="title">
                    Mentor
                  </div>
                  <div className="subtitle">Learning Platform</div>
                </div>
              </div>
            </div>
          </Link>

          <Link href={'https://premium.royal-kitchen.pl/'}>
            <div className="experiment-item">
              <div
                className="image-container"
                style={{ backgroundImage: "url('/media/royal-kitchen.png')" }}
              >
                <div className="text-overlay">
                  <div className="title">
                    Royal Kitchen
                  </div>
                  <div className="subtitle">Freelance Project</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

