import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const faqs = [
  {
    q: 'Para quem é a psicoterapia?',
    a: 'A psicoterapia é para qualquer pessoa que sinta o desejo ou a necessidade de se compreender melhor. Não é preciso estar em crise para buscar terapia — momentos de transição, inquietações persistentes, dificuldades nos relacionamentos, ansiedade, luto ou simplesmente a vontade de se conhecer mais profundamente já são motivos legítimos.',
  },
  {
    q: 'O que diferencia a psicologia analítica?',
    a: 'A Psicologia Analítica, de Carl Gustav Jung, se diferencia pelo olhar atento ao mundo simbólico: os sonhos, as imagens internas, os mitos e padrões que se repetem na vida. Buscamos o sentido por trás dos sintomas e a integração de aspectos da personalidade que muitas vezes desconhecemos.',
  },
  {
    q: 'Como funcionam as sessões online?',
    a: 'As sessões online acontecem por videochamada em plataforma segura, com a mesma qualidade do atendimento presencial. Você pode estar em qualquer lugar do Brasil ou do exterior — basta um ambiente tranquilo e uma conexão estável.',
  },
  {
    q: 'Como funciona o processo inicial?',
    a: 'A primeira sessão é um momento de acolhimento e escuta. É quando nos conhecemos, você compartilha o que te trouxe até ali e eu explico como funciona o processo terapêutico. Não existe pressão nem compromisso — é uma conversa para sentirmos se faz sentido caminharmos juntos.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="duvidas" className="py-32 md:py-40 px-6 md:px-16 lg:px-20 bg-surface-light">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <div className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-roxo-suave mb-8 flex items-center justify-center gap-4">
            <span className="w-6 h-[1px] bg-roxo-suave" />
            Dúvidas frequentes
            <span className="w-6 h-[1px] bg-roxo-suave" />
          </div>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-medium text-dark-warm tracking-[-0.02em] mb-4">
            Perguntas que você
            <br />
            pode estar se fazendo
          </h2>
          <div className="w-10 h-[2px] bg-rubi/25 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              variants={fadeUp}
              className="border-b border-rubi/10"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 py-7 text-left bg-transparent border-none cursor-pointer group"
              >
                <span className="font-display text-[0.75rem] font-medium text-rubi/30 bg-rubi/[0.06] rounded-full w-8 h-8 flex items-center justify-center shrink-0 group-hover:text-rubi group-hover:bg-rubi/10 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[1.1rem] md:text-[1.15rem] font-medium text-dark-warm pr-4 group-hover:text-rubi transition-colors duration-300 flex-1">
                  {faq.q}
                </span>
                <span
                  className={`font-display text-[1.5rem] font-light text-roxo-suave shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-[0.9rem] font-light text-text-secondary leading-[1.85] pb-7 pl-12 max-w-[65ch]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
