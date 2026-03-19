export default function StatementStrip() {
  const items = [
    'Escuta profunda', 'Psicologia Analítica', 'Processo de individuação',
    'Sonhos e símbolos', 'Presencial e online', 'Crianças, adolescentes e adultos',
  ]
  // Duplicate for seamless marquee
  const doubled = [...items, ...items]

  return (
    <div className="bg-rubi py-8 md:py-10 overflow-hidden relative">
      {/* Diagonal overlay lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(226,201,158,1) 20px, rgba(226,201,158,1) 21px)',
        }}
      />

      <div
        className="flex items-center gap-14 whitespace-nowrap relative z-[1]"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="contents">
            <span className="font-display text-[1.15rem] md:text-[1.25rem] font-normal italic text-[rgba(226,201,158,0.75)] tracking-[0.04em]">
              {item}
            </span>
            <span className="w-[6px] h-[6px] rounded-full bg-[rgba(226,201,158,0.35)] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
