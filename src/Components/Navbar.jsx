import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isActive, setActive] = useState(false)

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-4 lg:px-32 py-4 lg:py-5">
          <a href="/" className="flex items-center gap-x-2">
            <img
              src="/images/stemanika.png"
              alt="Stemanika Logo"
              className="aspect-square size-[35px] lg:size-[45px]"
            />
            <div>
              <h1
                className={`text-sm lg:text-base font-medium lg:font-semibold ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              >
                Virtual Tour
              </h1>
              <p
                className={`text-xs font-extralight lg:font-normal ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              >
                of STEMANIKA
              </p>
            </div>
          </a>
          <button
            type="button"
            className="block lg:hidden"
            onClick={() => setActive(true)}
          >
            <img
              src={`/icons/burger_${scrolled ? 'black' : 'white'}.svg`}
              alt=""
            />
          </button>
          <ul className="hidden lg:flex items-center gap-x-12">
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
      <div
        className={`${
          isActive ? 'top-0' : '-top-full'
        } fixed left-0 right-0 z-50 h-screen bg-white transition-all duration-300 ease-in-out p-4`}
      >
        <button
          type="button"
          onClick={() => setActive(false)}
          className="w-full flex items-center justify-between"
        >
          <a href="/" className="flex items-center gap-x-2 invisible">
            <img
              src="/images/stemanika.png"
              alt="Stemanika Logo"
              className="aspect-square size-[35px] lg:size-[45px]"
            />
            <div>
              <h1
                className={`text-sm lg:text-base font-medium lg:font-semibold ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              >
                Virtual Tour
              </h1>
              <p
                className={`text-xs font-extralight lg:font-normal ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              >
                of STEMANIKA
              </p>
            </div>
          </a>
          <img src="/icons/close.svg" alt="close icon" />
        </button>
        <div className="flex items-center justify-center h-full">
          <ul className="flex flex-col gap-y-12 text-center">
            <li>
              <a
                href="#about"
                onClick={() => setActive(false)}
                className="text-black text-2xl font-semibold hover:text-primary hover:underline transition-all duration-100 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#tour"
                onClick={() => setActive(false)}
                className="text-black text-2xl font-semibold hover:text-primary hover:underline transition-all duration-100 ease-in-out"
              >
                Tour
              </a>
            </li>
            <li>
              <a
                href="#places"
                onClick={() => setActive(false)}
                className="text-black text-2xl font-semibold hover:text-primary hover:underline transition-all duration-100 ease-in-out"
              >
                Places
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActive(false)}
                className="text-black text-2xl font-semibold hover:text-primary hover:underline transition-all duration-100 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
