import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#timeline' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
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
        id="mobile-navigation"
        inert={!menuOpen}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? 'max-h-96 border-t border-zinc-800'
            : 'max-h-0'
        }`}
      >
        <div
          className="px-6 py-6 flex flex-col gap-5
                     bg-zinc-950"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-zinc-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar