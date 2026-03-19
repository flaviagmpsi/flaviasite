import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-surface-warm via-surface-blush to-dark-warm/20 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16 lg:px-20 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Text content — centered vertically */}
          <div className="relative z-[2] w-full lg:w-1/2 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-[0.72rem] font-normal uppercase tracking-[0.2em] text-roxo-suave mb-7"
            >
              Psicóloga Clínica · CRP 04/84615
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-[clamp(2.4rem,4.5vw,4rem)] font-medium leading-[0.95] text-dark-warm mb-6 tracking-[-0.025em]"
            >
              Um espaço para
              <br />
              <em className="italic font-normal text-rubi">ouvir o que em você</em>
              <br />
              ainda busca expressão.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="w-10 h-[2px] bg-rubi/30 rounded-full mb-8 origin-left mx-auto lg:mx-0"
            />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-body text-[1rem] font-light text-text-secondary max-w-[44ch] leading-[1.8] mb-10 mx-auto lg:mx-0"
            >
              Psicoterapia individual com abordagem em Psicologia Analítica (junguiana). Cada pessoa carrega dentro de si uma história que pede para ser ouvida — e merece um espaço de escuta profunda e genuína.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-5 sm:gap-8 justify-center lg:justify-start"
            >
              <a
                href="#contato"
                className="font-body text-[0.82rem] font-normal uppercase tracking-[0.12em] text-bege bg-rubi border-none py-4 px-9 cursor-pointer transition-all duration-400 no-underline inline-block hover:bg-dark-rubi hover:-translate-y-[1px] hover:shadow-[0_8px_30px_rgba(133,39,54,0.25)]"
              >
                Agendar Sessão
              </a>
            </motion.div>
          </div>

          {/* Photo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-full max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] mx-auto lg:mx-0 z-[1]"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-rubi/15 rounded-lg pointer-events-none" />

            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}foto-flavia.jpeg`}
                alt="Flávia Gonçalves Moreira — Psicóloga Clínica"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-surface-base/95 backdrop-blur-sm border border-rubi/10 rounded-lg px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <span className="font-body text-[0.65rem] font-medium uppercase tracking-[0.2em] text-roxo-suave block">Psicóloga Clínica</span>
              <span className="font-display text-[0.9rem] font-normal text-dark-warm">CRP 04/84615</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--color-roxo-suave) 30%, var(--color-rubi) 70%, transparent 100%)'
        }}
      />
    </section>
  )
}
