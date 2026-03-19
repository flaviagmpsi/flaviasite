import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function ApproachQuote() {
  return (
    <section
      id="abordagem"
      className="relative py-28 md:py-36 px-6 md:px-10"
      style={{
        background: 'linear-gradient(135deg, var(--color-surface-warm) 0%, var(--color-surface-blush) 40%, rgba(170,116,160,0.25) 70%, rgba(133,39,54,0.1) 100%)'
      }}
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-[-1rem] left-1/2 -translate-x-1/2 lg:left-[15%] lg:translate-x-0 font-display text-[10rem] md:text-[14rem] font-light leading-none select-none pointer-events-none"
        style={{ color: 'rgba(133,39,54,0.05)' }}
      >
        &ldquo;
      </span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.15 }}
        transition={{ duration: 0.7 }}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center relative z-[1]"
      >
        <div className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-roxo-suave mb-8 flex items-center justify-center gap-4">
          <span className="w-6 h-[1px] bg-roxo-suave" />
          Abordagem
          <span className="w-6 h-[1px] bg-roxo-suave" />
        </div>
        <p className="font-display text-[clamp(1.4rem,2.5vw,1.9rem)] font-light italic text-dark-warm leading-[1.55] tracking-[-0.01em] mb-8">
          Você já se perguntou por que certos padrões se repetem na sua vida?
        </p>
        <p className="font-body text-[0.95rem] font-light text-text-secondary leading-[1.85] mb-8 max-w-[55ch] mx-auto">
          Na Psicologia Analítica, entendemos que o inconsciente não é apenas um depósito de memórias esquecidas — ele é vivo, criativo e se comunica conosco através de sonhos, símbolos e imagens.
        </p>
        <div className="w-8 h-[2px] bg-rubi/20 rounded-full mx-auto mb-4" />
        <span className="font-body text-[0.78rem] font-normal uppercase tracking-[0.15em] text-roxo-suave">
          — Psicologia Analítica de C. G. Jung
        </span>
      </motion.div>
    </section>
  )
}
