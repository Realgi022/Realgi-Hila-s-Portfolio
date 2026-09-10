import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
                 bg-zinc-950/90 backdrop-blur-md
                 border-b border-zinc-800"
    >
      <div
        className="max-w-6xl mx-auto px-6 h-20
                   flex items-center justify-between"
      >
        {/* Logo / Name */}
        <a
          href="#"
          onClick={closeMenu}
          className="text-xl font-bold text-white"
        >
          Realgi Hila
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-zinc-400 hover:text-white transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-zinc-400 hover:text-white transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-zinc-400 hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-zinc-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="md:hidden text-white
                     w-10 h-10 flex flex-col
                     items-center justify-center gap-1.5
                     cursor-pointer"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-white transition ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-white transition ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? 'max-h-80 border-t border-zinc-800'
            : 'max-h-0'
        }`}
      >
        <div
          className="px-6 py-6 flex flex-col gap-5
                     bg-zinc-950"
        >
          <a
            href="#about"
            onClick={closeMenu}
            className="text-zinc-300 hover:text-white transition"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="text-zinc-300 hover:text-white transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="text-zinc-300 hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="text-zinc-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar