'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import '../globals.css'

export default function Projects() {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    // Blur effect
    setTimeout(() => {
      const mainContent = document.getElementById('main-content')
      if (mainContent) {
        mainContent.classList.remove('blurred')
      }
    }, 500)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setShowNote(true), 1000);
    return () => clearTimeout(t);
  }, []);

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

        {/* Lazy dev note */}
        {showNote && (
          <div style={{
            margin: '48px auto 40px',
            maxWidth: '560px',
            background: '#161616',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            animation: 'noteSlideIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both',
          }}>
            <span style={{ fontSize: '22px', lineHeight: 1, marginTop: '3px', flexShrink: 0 }}>🥱</span>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>Psst — there are way more projects.</span>
                {' '}I built a ton of stuff after these but updating this page requires effort.
                And effort… is not really my thing right now.
              </p>
            </div>
            <button
              onClick={() => setShowNote(false)}
              aria-label="Dismiss"
              style={{
                background: 'none', border: 'none',
                color: 'rgba(255,255,255,0.3)', cursor: 'pointer',
                fontSize: '16px', lineHeight: 1, padding: '2px 0 0 4px', flexShrink: 0,
              }}
            >✕</button>
          </div>
        )}
        <style>{`
          @keyframes noteSlideIn {
            from { opacity: 0; transform: translateY(16px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0)    scale(1); }
          }
        `}</style>
      </section>
    </div>
  )
}


