import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rgMask = { top: '56%', left: '18%', width: '64%', height: '7%' };

const certifications = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    issuer: 'Certificação',
    period: 'Gran Faculdade',
    imageUrl: '/certificacoes/Certificado_Full-Stack_Developer.png',
    rgMask
  },
  {
    id: 2,
    title: 'Front-end Developer',
    issuer: 'Certificação',
    period: 'Gran Faculdade',
    imageUrl: '/certificacoes/Certificado_Front_end_Developer.png',
    rgMask
  },
  {
    id: 3,
    title: 'Back-End Developer',
    issuer: 'Certificação',
    period: 'Gran Faculdade',
    imageUrl: '/certificacoes/Certificado_Back-End_Developer.png',
    rgMask
  },
  {
    id: 4,
    title: 'Project Manager',
    issuer: 'Certificação',
    period: 'Gran Faculdade',
    imageUrl: '/certificacoes/Certificado_Project_Manager.png',
    rgMask
  },
  {
    id: 5,
    title: 'Técnico em Administração',
    issuer: 'Certificação',
    period: 'Escola Técnica de Ceilândia',
    imageUrl: '/certificacoes/Certificado_Técnica_em_Administracao.png',
    rgMask
  }
];

const About = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <section id="about" className="section">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Sou uma desenvolvedora apaixonada por construir soluções robustas e eficientes, com foco principal no ecossistema PHP e Laravel. Minha trajetória é marcada pela transformação de requisitos complexos em sistemas funcionais, utilizando tecnologias como JavaScript, HTML5 e CSS para criar interfaces dinâmicas e intuitivas.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Atuo ativamente em desafios de inovação, tendo participado de Hackathons focados em Big Data e Controle Social (Participa DF), onde aplico lógica de programação e análise de dados para resolver problemas reais da sociedade.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Minha abordagem combina o rigor técnico do backend com uma sensibilidade estética para o frontend, sempre buscando o equilíbrio entre performance, segurança e design.
            </p>

            <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', marginTop: '3rem' }}>
              <div>
                <h4 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>1+</h4>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>Ano de Experiência</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="education"
        className="section"
        style={{
          background: 'var(--color-bg-secondary)',
          borderTop: '1px solid var(--color-border)'
        }}
      >
        <div className="container" style={{ maxWidth: '1400px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '1000px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center' }}>
              Formação <span className="text-gradient">Acadêmica</span>
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
                  borderColor: 'rgba(0, 191, 255, 0.35)'
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{
                  background: 'var(--color-card-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div
                  style={{
                    width: '4px',
                    borderRadius: '999px',
                    background: 'var(--color-primary)',
                    boxShadow: '0 0 20px rgba(0, 191, 255, 0.25)',
                    flexShrink: 0,
                    alignSelf: 'stretch'
                  }}
                />
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '0.4rem' }}>
                    Graduanda em Análise e Desenvolvimento de Sistemas
                  </div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                    Gran Faculdade - 2024 a 2026 (Cursando).
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
                  borderColor: 'rgba(0, 191, 255, 0.35)'
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{
                  background: 'var(--color-card-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div
                  style={{
                    width: '4px',
                    borderRadius: '999px',
                    background: 'var(--color-primary)',
                    boxShadow: '0 0 20px rgba(0, 191, 255, 0.25)',
                    flexShrink: 0,
                    alignSelf: 'stretch'
                  }}
                />
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '0.4rem' }}>
                    Técnico em Administração
                  </div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                    Escola Técnica de Ceilândia - Concluído em 2023.
                  </div>
                </div>
              </motion.div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h3
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '1.5rem',
                  color: 'var(--color-heading)',
                  borderLeft: '4px solid var(--color-primary)',
                  paddingLeft: '1rem'
                }}
              >
                Certificações
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1.5rem'
                }}
              >
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveCert(cert)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setActiveCert(cert);
                    }}
                    whileHover={{
                      y: -6,
                      boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
                      borderColor: 'rgba(0, 191, 255, 0.35)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    style={{
                      background: 'var(--color-card-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        background: 'linear-gradient(135deg, var(--color-secondary), var(--color-bg-secondary))',
                        borderBottom: '1px solid var(--color-border)',
                        position: 'relative'
                      }}
                    >
                      <img
                        src={
                          cert.imageUrl ||
                          'https://placehold.co/800x450/001F3F/00BFFF?text=Certificado'
                        }
                        alt={cert.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                      {cert.rgMask && (
                        <div
                          style={{
                            position: 'absolute',
                            top: cert.rgMask.top,
                            left: cert.rgMask.left,
                            width: cert.rgMask.width,
                            height: cert.rgMask.height,
                            backdropFilter: 'blur(12px)',
                            background: 'rgba(0, 0, 0, 0.35)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '8px',
                            pointerEvents: 'none'
                          }}
                        />
                      )}
                    </div>

                    <div style={{ padding: '1.25rem' }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
                        {cert.title}
                      </div>
                      <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {cert.issuer}
                      </div>
                      <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.4rem', opacity: 0.9 }}>
                        {cert.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'var(--color-overlay)',
              backdropFilter: 'blur(10px)',
              zIndex: 1200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-primary)',
                borderRadius: '16px',
                width: '92%',
                maxWidth: '760px',
                maxHeight: '80vh',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 0 50px rgba(0, 191, 255, 0.2)'
              }}
            >
              <button
                onClick={() => setActiveCert(null)}
                type="button"
                aria-label="Fechar"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '999px',
                  background: 'var(--color-card-bg)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-heading)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                ×
              </button>

              <div
                style={{
                  padding: '1.25rem',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}
              >
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-heading)' }}>
                  {activeCert.title}
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  {activeCert.issuer} • {activeCert.period}
                </div>
              </div>

              <div style={{ padding: '1rem', background: '#000' }}>
                <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                  <img
                    src={
                      activeCert.imageUrl ||
                      'https://placehold.co/1400x900/001F3F/00BFFF?text=Certificado'
                    }
                    alt={activeCert.title}
                    style={{
                      width: '100%',
                      maxHeight: '55vh',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                  {activeCert.rgMask && (
                    <div
                      style={{
                        position: 'absolute',
                        top: activeCert.rgMask.top,
                        left: activeCert.rgMask.left,
                        width: activeCert.rgMask.width,
                        height: activeCert.rgMask.height,
                        backdropFilter: 'blur(12px)',
                        background: 'rgba(0, 0, 0, 0.35)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '10px',
                        pointerEvents: 'none'
                      }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
