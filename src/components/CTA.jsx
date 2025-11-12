export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="rounded-3xl bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-400 p-[1px] shadow-lg">
          <div className="rounded-3xl bg-white/90 px-8 py-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Build with Odin Labs</h2>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">Tell us about your data, constraints, and goals. We’ll propose a pragmatic roadmap to ship a private, context-intelligent assistant.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="mailto:hello@odin-labs.ai" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800">hello@odin-labs.ai</a>
              <a href="#" className="inline-flex items-center rounded-full bg-white text-gray-900 border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50">View deck</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
