import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const contactItems = [
  { label: 'WhatsApp', value: '+55 31 9263-1718', href: 'https://wa.me/5531926317180' },
  { label: 'E-mail', value: 'contato@flaviagonçalves.com.br', href: 'mailto:contato@flaviagoncalves.com.br' },
  { label: 'Consultório', value: 'Belo Horizonte, MG', href: null },
  { label: 'Atendimento', value: 'Presencial & Online', href: null },
]

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-dark-warm py-32 md:py-40 pb-40 md:pb-48 px-6 md:px-16 lg:px-20 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div
        className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(133,39,54,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(170,116,160,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-[1]">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="font-body text-[0.68rem] font-medium uppercase tracking-[0.25em] text-[rgba(226,201,158,0.45)] mb-8 flex items-center justify-center gap-4">
            <span className="w-6 h-[1px] bg-[rgba(226,201,158,0.25)]" />
            Contato
            <span className="w-6 h-[1px] bg-[rgba(226,201,158,0.25)]" />
          </div>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.2rem)] font-medium text-bege leading-[1.15] tracking-[-0.02em] mb-5">
            O primeiro passo
            <br />
            é decidir <em className="italic font-normal text-roxo-suave">começar.</em>
          </h2>
          <div className="w-10 h-[2px] bg-[rgba(226,201,158,0.15)] rounded-full mx-auto mb-7" />
          <p className="font-body text-[0.95rem] font-light text-[rgba(226,201,158,0.55)] leading-[1.85] max-w-[48ch] mx-auto">
            Se você sente que é hora de olhar para dentro com mais cuidado, entre em contato. A primeira conversa é para que possamos entender se faz sentido caminharmos juntos.
          </p>
        </motion.div>

        {/* Contact card — overlaps footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          variants={fadeUp}
          className="bg-[rgba(226,201,158,0.06)] border border-[rgba(226,201,158,0.1)] rounded-2xl p-8 md:p-10 -mb-24 md:-mb-28"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {contactItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <span className="font-display text-[1.1rem] text-roxo-suave mb-1">
                  ✦
                </span>
                <div className="font-body text-[0.68rem] font-normal uppercase tracking-[0.2em] text-[rgba(226,201,158,0.35)]">
                  {item.label}
                </div>
                <div className="font-display text-[1rem] font-normal text-bege">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-inherit no-underline border-b border-[rgba(226,201,158,0.2)] hover:border-roxo-suave transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5531926317180"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 font-body text-[0.82rem] font-normal uppercase tracking-[0.12em] text-dark-warm bg-bege py-5 px-14 no-underline transition-all duration-350 hover:bg-white hover:-translate-y-[1px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          >
            Agendar Primeira Sessão
          </a>
        </motion.div>
      </div>
    </section>
  )
}
