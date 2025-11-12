export default function Platform() {
  const features = [
    {
      title: 'Context Engine',
      desc: 'Hybrid retrieval: vector + sparse + relational signals orchestrated via context graphs.'
    },
    {
      title: 'Private GPT Runtime',
      desc: 'Air-gapped or VPC hosted with policy controls, redaction, and tenant isolation.'
    },
    {
      title: 'Memory & State',
      desc: 'Long-horizon episodic memory, streaming context, and tool-use traces.'
    },
    {
      title: 'Observability',
      desc: 'Traces, evals, drift detection, and dataset generation for continuous improvement.'
    }
  ]

  return (
    <section id="platform" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Platform</h2>
          <p className="mt-3 text-gray-700">A production-grade stack to build private, context-intelligent assistants and copilots. Composable APIs or full-stack deployment — your call.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
