import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="bg-[#2E2222] pt-10 md:pt-12 pb-8 px-6 md:px-16 lg:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="font-display text-[1rem] font-normal text-[rgba(226,201,158,0.35)]">
          Flávia Gonçalves Moreira — CRP 04/84615
        </span>
        <span className="font-body text-[0.72rem] text-[rgba(226,201,158,0.2)] tracking-[0.05em]">
          © 2026 · Todos os direitos reservados
        </span>
      </div>
    </motion.footer>
  )
}
