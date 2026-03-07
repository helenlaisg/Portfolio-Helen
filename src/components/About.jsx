import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
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
  );
};

export default About;
