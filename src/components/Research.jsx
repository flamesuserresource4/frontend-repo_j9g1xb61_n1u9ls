export default function Research() {
  const items = [
    {
      title: 'Context Graphs',
      desc: 'Knowledge fabrics for multi-hop retrieval and agentic reasoning across long horizons.',
      tag: 'Whitepaper'
    },
    {
      title: 'Private GPT Orchestration',
      desc: 'Tenant-isolated, policy-aware inference with dynamic grounding and PII-safe logs.',
      tag: 'System Design'
    },
    {
      title: 'Streaming Memory',
      desc: 'Temporal embeddings and episodic memory for always-on assistants that stay in sync.',
      tag: 'Research Note'
    }
  ]

  return (
    <section id="research" className="py-24 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Research and engineering at the frontier</h2>
          <p className="mt-3 text-gray-700">We publish pragmatic research that ships. Our work blends IR, knowledge graphs, prompt programming, and systems engineering to make LLMs situationally aware.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-flex items-center rounded-full bg-purple-50 text-purple-700 text-xs px-2 py-1">{item.tag}</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">{item.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{item.desc}</p>
              <a href="#" className="mt-4 inline-flex text-sm text-gray-900 font-medium hover:underline">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
