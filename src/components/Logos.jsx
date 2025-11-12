export default function Logos() {
  const logos = [
    'OpenAI', 'Hugging Face', 'Anthropic', 'AWS', 'Azure', 'Google Cloud'
  ]
  return (
    <section className="py-12 border-y border-gray-100 bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-gray-600 text-sm mb-6">Trusted by teams building with state-of-the-art AI</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
          {logos.map((logo) => (
            <div key={logo} className="text-center text-gray-800 font-semibold tracking-tight text-sm">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
