import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section
      id="sobre"
      className="py-32 md:py-40 px-6 md:px-16 lg:px-20 bg-surface-light"
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
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] font-medium leading-[1.2] text-dark-warm tracking-[-0.02em]">
            <em className="italic font-normal text-rubi">"A arte nos exige por inteiro"</em>
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
          className="drop-cap font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left mb-10 max-w-[65ch] mx-auto"
        >
          Minha trajetória na Psicologia sempre foi marcada por uma busca para compreender a complexidade da experiência humana, em todas as suas camadas, contradições e transformações, naquilo que é consciente e naquilo que não é. Esse olhar me levou até a Psicologia Analítica de Carl G. Jung, abordagem pela qual atuo e que me possibilita ser e entrar em contato com tudo aquilo que há de humano na clínica e nos estudos.
        </motion.p>

        {/* Second paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          variants={fadeUp}
          className="font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left mb-8 max-w-[65ch] mx-auto"
        >
          Sou formada em Psicologia pela Pontifícia Universidade Católica de Minas Gerais, e, desde a graduação, construo minha prática clínica por meio de estágios e projetos de extensão. Ao longo desse percurso, a participação e a condução de grupos de estudo ampliaram meu olhar clínico, tanto no ambiente acadêmico quanto fora dele. Cada experiência reforçou a ideia de que a clínica é sempre um encontro novo, e que nos cabe a disposição para realizar um trabalho artesanal, sem fórmulas pré-estabelecidas.
        </motion.p>

        {/* Third paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={fadeUp}
          className="font-body text-[0.95rem] font-light text-text-secondary leading-[1.9] text-left max-w-[65ch] mx-auto"
        >
          Hoje, atendo presencialmente em Belo Horizonte e de forma online para todo o Brasil e exterior. Trabalho com criança, adolescentes e adultos na clínica individual e estendo minha formação através de projetos continuados nas instituições em que atuo e em grupos de estudos dentro e fora da área da Psicologia.
        </motion.p>
      </div>
    </section>
  )
}
