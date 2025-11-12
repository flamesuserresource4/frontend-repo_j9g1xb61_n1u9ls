import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Research', href: '#research' },
    { label: 'Platform', href: '#platform' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-semibold text-gray-900 tracking-tight">Odin Labs</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Talk to us
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-full rounded-md px-3 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full rounded-md px-3 py-2 bg-gray-900 text-white hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Talk to us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
