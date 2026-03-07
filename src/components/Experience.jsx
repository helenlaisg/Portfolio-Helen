import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Técnico em Programação",
    company: "Hospital das Forças Armadas (HFA)",
    period: "Jul de 2025 – Presente",
    description: "Responsável pela evolução do Sistema de Gestão de Pessoas (SGP) utilizando PHP 8 e Laravel. Atuo no desenvolvimento de módulos estratégicos, automação de processos governamentais e gestão de bancos de dados MySQL/SQLite. Foco em alta performance, segurança de dados sensíveis e refatoração de sistemas legados para escalabilidade."
  },
  {
    id: 2,
    role: "Jovem Aprendiz T.I (Desenvolvimento & Processos)",
    company: "Brasal",
    period: "Set de 2024 – Jul de 2025",
    description: "Formação técnica em Front-End e Back-End (SENAI) aplicada à excelência operacional. Atuei no mapeamento de processos e documentação técnica de RPAs (Robôs), estruturando fluxogramas e automações para otimização de fluxos de trabalho corporativos."
  },
  {
    id: 3,
    role: "Jovem Aprendiz Administrativo (Operações & Dados)",
    company: "Platinum Administradora de Benefícios",
    period: "Jan de 2024 – Set de 2024",
    description: "Suporte operacional focado em conformidade e integridade de dados. Responsável pela análise rigorosa de documentação e gestão de planilhas de controle, desenvolvendo uma base sólida em atenção aos detalhes e organização administrativa."
  },
  {
    id: 4,
    role: "Monitora Infantil (Soft Skills & Responsabilidade)",
    company: "Restaurante",
    period: "Jul de 2023 – Jan de 2024",
    description: "Experiência fundamental no desenvolvimento de competências interpessoais, mediação de conflitos e alto senso de responsabilidade, qualidades que hoje aplico na liderança de projetos técnicos e no trabalho colaborativo em equipe."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Minha <span className="text-gradient">Jornada</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Uma linha do tempo das minhas experiências profissionais e projetos mais impactantes.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--color-primary), transparent)',
            zIndex: 0
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ position: 'relative', paddingLeft: '60px' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  background: 'var(--color-bg)',
                  border: '2px solid var(--color-primary)',
                  borderRadius: '50%',
                  zIndex: 1,
                  boxShadow: '0 0 10px var(--color-primary)'
                }} />

                <div style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="experience-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  e.currentTarget.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '0.5rem' }}>{exp.role}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                        <Briefcase size={16} />
                        <span style={{ fontWeight: '500' }}>{exp.company}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', background: 'var(--color-card-bg)', padding: '4px 12px', borderRadius: '20px' }}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
