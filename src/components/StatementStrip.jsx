import { motion } from 'framer-motion'

export default function StatementStrip() {
  const items = [
    'Escuta profunda', 'Psicologia Analítica', 'Processo de individuação',
    'Sonhos e símbolos', 'Presencial e online', 'Crianças, adolescentes e adultos',
  ]
  // Duplicate for seamless marquee
  const doubled = [...items, ...items]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="bg-rubi py-3 md:py-4 overflow-hidden border-t border-b border-rubi/10"
    >
      <div
        className="flex items-center gap-14 whitespace-nowrap"
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
    </motion.div>
  )
}
