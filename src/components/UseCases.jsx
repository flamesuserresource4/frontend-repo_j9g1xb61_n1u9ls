export default function UseCases() {
  const items = [
    { title: 'Enterprise Knowledge Assistant', desc: 'Unified assistant across docs, tickets, code, and BI with strict access and audit.' },
    { title: 'Customer Support Copilot', desc: 'Context-grounded suggestions, summaries, and actions embedded into your workflow.' },
    { title: 'R&D Research Agent', desc: 'Long-horizon agent that tracks hypotheses, runs searches, and organizes insights.' },
    { title: 'Voice Concierge', desc: 'Real-time streaming voice agent with memory and policy-aware actioning.' },
  ]

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-purple-50/40 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Where we fit</h2>
          <p className="mt-3 text-gray-700">We partner with technical teams to ship secure, high-ROI assistants. Start with a pilot, then scale with confidence.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{i.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
