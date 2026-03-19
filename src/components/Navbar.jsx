import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'py-[0.9rem] px-6 md:px-16 lg:px-20 bg-[rgba(226,201,158,0.88)] backdrop-blur-[20px] border-b border-rubi/8'
          : 'py-5 px-6 md:px-16 lg:px-20'
      }`}
    >
      <a href="#" className="font-display text-[1.35rem] font-medium text-rubi tracking-[-0.01em] no-underline">
        Flávia Gonçalves Moreira
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-9 list-none">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-body text-[0.8rem] font-normal text-text-secondary no-underline uppercase tracking-[0.12em] relative transition-colors duration-300 hover:text-rubi group"
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-rubi transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contato"
            className="font-body text-[0.8rem] font-normal text-rubi uppercase tracking-[0.12em] no-underline py-[0.55rem] px-6 border border-rubi rounded-[2px] transition-all duration-350 hover:bg-rubi hover:text-bege"
          >
            Agendar
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
        aria-label="Menu"
      >
        <span className={`block w-5 h-[1.5px] bg-dark-warm transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-dark-warm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-dark-warm transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(226,201,158,0.97)] backdrop-blur-[20px] border-b border-rubi/10 py-8 px-6 flex flex-col gap-5">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-[0.85rem] text-text-secondary no-underline uppercase tracking-[0.12em] hover:text-rubi transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="font-body text-[0.82rem] text-rubi uppercase tracking-[0.12em] no-underline py-3 px-6 border border-rubi rounded-[2px] text-center mt-2 hover:bg-rubi hover:text-bege transition-all"
          >
            Agendar
          </a>
        </div>
      )}
    </nav>
  )
}
