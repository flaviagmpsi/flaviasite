import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const services = [
  {
    num: '01',
    title: 'Autoconhecimento',
    desc: 'O processo de individuação — tornar-se quem você verdadeiramente é. Integrar luz e sombra, razão e emoção, o conhecido e o misterioso.',
  },
  {
    num: '02',
    title: 'Sonhos & Símbolos',
    desc: 'Na clínica junguiana, os sonhos são mensageiros do inconsciente. Aprendemos juntos a ouvir essa linguagem simbólica que pede atenção.',
  },
  {
    num: '03',
    title: 'Ansiedade & Sofrimento',
    desc: 'Quando o corpo fala o que a mente ainda não conseguiu organizar. Um espaço para acolher, compreender e transformar o que dói.',
  },
  {
    num: '04',
    title: 'Relacionamentos',
    desc: 'Entender as dinâmicas que se repetem nas relações, os padrões herdados e os vínculos que pedem ressignificação.',
  },
  {
    num: '05',
    title: 'Transições de Vida',
    desc: 'Mudanças de fase, crises de sentido, momentos onde o chão parece se mover. Cada transição pede um olhar atento para o que nasce.',
  },
  {
    num: '06',
    title: 'Luto & Perdas',
    desc: 'Acompanhamento sensível nos processos de despedida — de pessoas, de fases, de versões de si mesmo que já não cabem mais.',
  },
]

export default function Services() {
  const featured = services[0]
  const rest = services.slice(1)

  return (
    <section id="atuacao" className="py-28 md:py-36 px-6 md:px-16 lg:px-20 bg-surface-base">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.15 }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="text-center max-w-[560px] mx-auto mb-20"
        >
          <div className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-roxo-suave mb-6">
            Áreas de atuação
          </div>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-medium text-dark-warm tracking-[-0.02em] mb-4">
            Cada demanda é acolhida com
            <br />
            <em className="italic font-normal text-rubi">cuidado</em> e profundidade
          </h2>
          <div className="w-10 h-[2px] bg-rubi/25 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Featured card — full width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          variants={fadeUp}
          className="mb-7"
        >
          <div className="bg-surface-light/70 border border-rubi/8 rounded-2xl p-8 md:p-10 transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default hover:bg-surface-warm hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(133,39,54,0.08)] group lg:flex lg:items-center lg:gap-10">
            <div className="font-display text-[3.5rem] lg:text-[5rem] font-light leading-none mb-4 lg:mb-0 transition-colors duration-400 text-[rgba(133,39,54,0.12)] group-hover:text-rubi lg:min-w-[120px] lg:text-center shrink-0">
              {featured.num}
            </div>
            <div>
              <h3 className="font-display text-[1.5rem] lg:text-[1.7rem] font-semibold text-dark-warm mb-3 tracking-[-0.01em]">
                {featured.title}
              </h3>
              <p className="font-body text-[0.92rem] text-text-secondary font-light leading-[1.8] max-w-[60ch]">
                {featured.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Remaining cards — 2-column grid with stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.15 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
        >
          {rest.map((s, i) => (
            <div
              key={s.num}
              className={`bg-surface-light/70 border border-rubi/8 rounded-2xl p-8 transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default hover:bg-surface-warm hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(133,39,54,0.08)] group ${
                i % 2 !== 0 ? 'md:mt-8' : ''
              }`}
            >
              <div className="font-display text-[2.2rem] font-light leading-none mb-5 transition-colors duration-400 text-[rgba(133,39,54,0.15)] group-hover:text-rubi">
                {s.num}
              </div>
              <h3 className="font-display text-[1.3rem] font-semibold text-dark-warm mb-3 tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="font-body text-[0.88rem] text-text-secondary font-light leading-[1.75] max-w-[45ch]">
                {s.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
