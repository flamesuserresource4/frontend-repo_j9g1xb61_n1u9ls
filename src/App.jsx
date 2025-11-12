import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Research from './components/Research'
import Platform from './components/Platform'
import UseCases from './components/UseCases'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Research />
        <Platform />
        <UseCases />
        <CTA />
      </main>
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span>© {new Date().getFullYear()} Odin Labs</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#research" className="hover:text-gray-900">Research</a>
            <a href="#platform" className="hover:text-gray-900">Platform</a>
            <a href="#use-cases" className="hover:text-gray-900">Use Cases</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
