import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const badges = [
  'PUC Minas',
  'Psicologia Analítica',
  'Clínica Junguiana',
  'BH & Online',
  'Crianças, Adolescentes & Adultos',
]

export default function About() {
  return (
    <section
      id="sobre"
      className="py-32 md:py-40 px-6 md:px-10 bg-surface-light"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="mb-8"
        >
          <div className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-roxo-suave mb-8 flex items-center justify-center gap-4">
            <span className="w-6 h-[1px] bg-roxo-suave" />
            Sobre mim
            <span className="w-6 h-[1px] bg-roxo-suave" />
          </div>
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] font-light leading-[1.2] text-dark-warm tracking-[-0.02em]">
            Acredito na potência do{' '}
            <em className="italic font-normal text-rubi">encontro</em>{' '}
            terapêutico.
          </h2>
          <div className="w-10 h-[2px] bg-rubi/25 rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          variants={fadeUp}
          className="drop-cap font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left mb-10"
        >
          Minha trajetória na psicologia começou com uma inquietação genuína: compreender o que nos move para além daquilo que conseguimos explicar racionalmente. Foi essa curiosidade pelo que existe nas camadas mais profundas da experiência humana que me levou à Psicologia Analítica de Carl Gustav Jung — uma abordagem que olha para os sonhos, os símbolos e as narrativas que cada pessoa carrega dentro de si.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 py-10 border-y border-rubi/10 mb-10"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full bg-surface-warm/60 border border-rubi/10 px-5 py-2 font-body text-[0.78rem] font-normal text-dark-warm tracking-[0.02em]"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-rubi/40 shrink-0" />
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Second paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          variants={fadeUp}
          className="font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left mb-8"
        >
          Me formei em Psicologia pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas), onde pude construir uma base sólida tanto teórica quanto prática. Ainda durante a graduação, mergulhei na clínica: atendimentos supervisionados, grupos de estudo, práticas deliberadas e projetos em instituições. Cada experiência reforçou a certeza de que a escuta terapêutica é um trabalho artesanal — não existe fórmula pronta.
        </motion.p>

        {/* Third paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={fadeUp}
          className="font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left"
        >
          Hoje, atendo presencialmente em Belo Horizonte e de forma online para todo o Brasil e exterior. Trabalho com crianças, adolescentes e adultos, sempre com o compromisso de oferecer um espaço onde a escuta acontece de verdade — com profundidade, respeito e inteireza.
        </motion.p>
      </div>
    </section>
  )
}
