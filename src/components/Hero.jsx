import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 text-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          Private GPT + Context Intelligence
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
          Context-aware AI for private, mission-critical work
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Odin Labs builds LLM systems that truly understand your world — securely, privately, and in real time. We fuse retrieval, long-horizon memory, and dynamic context for stateful AI agents.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">
            Request a demo
          </a>
          <a href="#research" className="inline-flex items-center rounded-full bg-white text-gray-900 border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50">
            Read our research
          </a>
        </div>
      </div>
    </section>
  )
}
