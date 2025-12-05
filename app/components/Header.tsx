'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="pc-header">
        <div className="header-container">
          <Link href="/" className="logo">
            <img src="/media/dp.png" alt="" className="logo-image" />
            <p className="logo-text">Tahmied</p>
          </Link>
          <nav>
            <ul className="nav-list">
              <li>
                <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`nav-item ${pathname === '/projects' ? 'active' : ''}`}>
                  All Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className={`nav-item ${pathname === '/blog' ? 'active' : ''}`}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={`darken-effect ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className="mobile-header">
        <div className="mobile-header-container">
          <Link href="/" className="logo">
            <img src="/media/dp.png" alt="" className="logo-image" />
            <p className="logo-text">Tahmied</p>
          </Link>

          <label className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <input type="checkbox" checked={menuOpen} readOnly />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>

      <div className={`mobile-menu-sidebar ${menuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu-nav">
          <li className="mobile-nav-item">
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/projects" onClick={closeMenu}>All Projects</Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/blog" onClick={closeMenu}>Blog</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

