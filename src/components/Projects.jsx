import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section id="projetos" className="py-32 md:py-40 px-6 md:px-16 lg:px-20 bg-surface-base">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-roxo-suave mb-8 flex items-center justify-center gap-4">
            <span className="w-6 h-[1px] bg-roxo-suave" />
            Projetos e Iniciativas
            <span className="w-6 h-[1px] bg-roxo-suave" />
          </div>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-medium text-dark-warm tracking-[-0.02em] mb-5">
            Para além do <em className="italic font-normal text-rubi">consultório</em>
          </h2>
          <div className="w-10 h-[2px] bg-rubi/25 rounded-full mx-auto mt-5 mb-6" />
          <p className="font-body text-[0.95rem] text-text-muted font-light max-w-[50ch] mx-auto leading-[1.8]">
            A psicologia que pratico não se limita ao setting clínico. Estes são espaços que fazem parte da minha formação contínua.
          </p>
        </motion.div>

        {/* Cards — stacked */}
        <div className="space-y-8">
          {/* Allos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={fadeUp}
            className="relative bg-surface-light/70 border border-rubi/8 rounded-2xl overflow-hidden group"
          >
            <div className="h-1 bg-gradient-to-r from-rubi/40 via-rubi/20 to-transparent" />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-[1.5rem] font-light text-[rgba(133,39,54,0.18)] group-hover:text-rubi transition-colors duration-400">
                  ✦
                </span>
                <span className="font-body text-[0.68rem] font-normal uppercase tracking-[0.2em] text-roxo-suave">
                  Gestora de Comunidade
                </span>
              </div>
              <h3 className="font-display text-[1.4rem] font-semibold text-dark-warm mb-5 tracking-[-0.01em]">
                Associação Allos
              </h3>
              <p className="font-body text-[0.9rem] text-text-secondary font-light leading-[1.85] mb-5 max-w-[65ch]">
                A Allos é uma ONG que atua com projetos sociais e inovação na área da educação, com foco especial na Psicologia. Através de sua clínica-escola, a instituição propõe o desenvolvimento supervisionado de graduandos e profissionais por meio da prática deliberada, formação teórica e atuação em projetos sociais — pilares que considero essenciais para uma trajetória de excelência na nossa área.
              </p>
              <p className="font-body text-[0.9rem] text-text-secondary font-light leading-[1.85] max-w-[65ch]">
                Há mais de dois anos, componho a equipe de gestão de comunidade da Associação, onde trabalho promovendo o desenvolvimento participativo dos associados em um ambiente de pertencimento e iniciativa para o aprendizado conjunto. Além disso, atuo na avaliação e monitoria do desenvolvimento de estagiários, acompanhando de perto a prática clínica e os grupos de estudos teóricos.
              </p>
            </div>
          </motion.div>

          {/* Nonai */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            variants={fadeUp}
            className="relative bg-[rgba(170,116,160,0.06)] border border-roxo-suave/15 rounded-2xl overflow-hidden group"
          >
            <div
              className="absolute -bottom-16 -right-16 w-[200px] h-[200px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(170,116,160,0.1) 0%, transparent 70%)' }}
            />
            <div className="relative z-[1] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-[1.5rem] font-light text-[rgba(170,116,160,0.3)] group-hover:text-roxo-suave transition-colors duration-400">
                  ◆
                </span>
                <span className="font-body text-[0.68rem] font-normal uppercase tracking-[0.2em] text-roxo-suave">
                  Psicologia e Política
                </span>
              </div>
              <h3 className="font-display text-[1.4rem] font-semibold text-dark-warm mb-5 tracking-[-0.01em]">
                Coletivo Nonai
              </h3>
              <p className="font-body text-[0.9rem] text-text-secondary font-light leading-[1.85] max-w-[65ch]">
                O Nonai é um coletivo que integra o saber psi ao contexto do mundo. Nossa identidade é pautada pelo compromisso com uma Psicologia participativa, onde o aprofundamento teórico caminha lado a lado com a consciência social. Valorizamos a educação continuada e a coletividade, acreditando que o conhecimento se fortalece na troca. Aqui, o processo de escuta é guiado pela ética de que o individual e o coletivo coexistem e se moldam mutuamente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
