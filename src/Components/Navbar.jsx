import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-32 py-5">
        <a href="/" className="flex items-center gap-x-2">
          <img
            src="/stemanika.png"
            alt="Stemanika Logo"
            width={45}
            height={45}
            className="aspect-square"
          />
          <div>
            <h1
              className={`text-base font-semibold ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Virtual Tour
            </h1>
            <p
              className={`text-xs font-normal ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              of STEMANIKA
            </p>
          </div>
        </a>
        <ul className="flex items-center gap-x-12">
          <li>
            <a
              href="#about"
              className={`text-base font-medium ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#places"
              className={`text-base font-medium ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Places
            </a>
          </li>
          <li>
            <a
              href="#tour"
              className={`text-base font-medium ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Tour
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`text-base font-medium ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
