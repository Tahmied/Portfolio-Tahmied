'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <style jsx>{`
        /* Hamburger animations */
        .line {
          fill: none;
          stroke: white;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line-top-bottom {
          stroke-dasharray: 12 63;
        }

        input:checked + svg {
          transform: rotate(-45deg);
        }

        input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }

        /* Logo text gradient */
        .logo-text-gradient {
          background: linear-gradient(90deg, #e6e6e6, #b0b0b0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Nav item underline animation */
        .nav-item-underline::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #7a7a7a, #ffffff);
          transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .nav-item-underline:hover::after {
          width: 100%;
        }
      `}</style>

      <header className="pc-header hidden md:block bg-[rgba(28,28,28,0.92)] backdrop-blur-[8px] border-b border-[rgba(255,255,255,0.08)] sticky top-0 z-[1000] px-[5%]">
        <div className="header-container flex justify-between items-center max-w-[1300px] w-[90%] !mx-auto h-20">
          <Link
            href="/"
            className="flex items-center gap-[14px] cursor-pointer transition-transform duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:translate-x-[5px]"
          >
            <img
              src="/media/dp.png"
              alt=""
              className="h-[50px] w-[50px] rounded-full object-cover border-2 border-[rgba(255,255,255,0.1)] shadow-[0_4px_15px_rgba(0,0,0,0.25)]"
            />
            <p className="logo-text-gradient text-[#f5f5f5] text-[1.6rem] font-bold tracking-[1px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
              Tahmied
            </p>
          </Link>
          <nav>
            <ul className="flex gap-10 m-0 p-0">
              <li className="list-none">
                <Link
                  href="/"
                  className={`nav-item-underline relative block px-0 py-2 text-[0.95rem] font-medium tracking-[1.2px] uppercase cursor-pointer transition-colors duration-300 ease-in-out ${pathname === '/' ? 'text-white' : 'text-[#b0b0b0] hover:text-white'
                    }`}
                >
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/projects"
                  className={`nav-item-underline relative block px-0 py-2 text-[0.95rem] font-medium tracking-[1.2px] uppercase cursor-pointer transition-colors duration-300 ease-in-out ${pathname === '/projects' ? 'text-white' : 'text-[#b0b0b0] hover:text-white'
                    }`}
                >
                  All Projects
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/blog"
                  className={`nav-item-underline relative block px-0 py-2 text-[0.95rem] font-medium tracking-[1.2px] uppercase cursor-pointer transition-colors duration-300 ease-in-out ${pathname === '/blog' ? 'text-white' : 'text-[#b0b0b0] hover:text-white'
                    }`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-[rgb(18,17,17,0.74)] backdrop-blur-[40px] z-10 transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={closeMenu}
      ></div>

      <div className="block md:hidden py-8">
        <div className="flex justify-between items-center w-[90%] !py-[1rem] !mx-auto">
          <Link href="/" className="flex justify-center items-center gap-[10px] no-underline">
            <img
              src="/media/dp.png"
              alt=""
              className="h-[50px] w-[50px] rounded-full object-cover border-2 border-[rgba(255,255,255,0.1)] shadow-[0_4px_15px_rgba(0,0,0,0.25)]"
            />
            <p className="logo-text-gradient text-[#f5f5f5] text-[1.6rem] font-bold tracking-[1px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
              Tahmied
            </p>
          </Link>
          <label className="cursor-pointer z-[999]" htmlFor="hamburger-checkbox">
            <input
              type="checkbox"
              id="hamburger-checkbox"
              className="hidden"
              checked={menuOpen}
              onChange={(e) => setMenuOpen(e.target.checked)}
            />
            <svg
              viewBox="0 0 32 32"
              className="h-12 transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-[40%] max-[630px]:w-1/2 max-[425px]:w-[65%] bg-[#1a1a1a] z-[99] text-white flex justify-center items-center shadow-[-8px_0_30px_rgba(0,0,0,0.7),-2px_0_10px_rgba(255,255,255,0.1)] transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${menuOpen ? 'translate-x-0' : 'translate-x-full invisible'
          }`}
      >
        <ul className="flex flex-col justify-center items-center gap-8 list-none p-0 m-0">
          <li className="text-[1.2em]">
            <Link href="/" onClick={closeMenu} className="text-white no-underline">
              Home
            </Link>
          </li>
          <li className="text-[1.2em]">
            <Link href="/projects" onClick={closeMenu} className="text-white no-underline">
              All Projects
            </Link>
          </li>
          <li className="text-[1.2em]">
            <Link href="/blog" onClick={closeMenu} className="text-white no-underline">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}