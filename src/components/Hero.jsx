import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, GraduationCap } from 'lucide-react';
import AbstractProfile from './AbstractProfile';

const Hero = () => {
  const lattesUrl = 'https://lattes.cnpq.br/9677125252408820';
  return (
    <section id="hero" className="section hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'left' }}
        >
          <h2 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px' }}>
            OLÁ, EU SOU
          </h2>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            <span className="text-gradient">HELEN LAÍS</span>
          </h1>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            Desenvolvedora Full-Stack
          </h3>
          <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
            Especialista no ecossistema PHP & Laravel. Transformo ideias em sistemas robustos e interfaces dinâmicas utilizando JavaScript, HTML5 e CSS3.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Projetos <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="/cv/Currículo_HelenLais_Atualizado.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ border: '1px solid var(--color-text-muted)', color: 'var(--color-text)' }}
            >
              Baixar CV <Download size={18} />
            </motion.a>
            <motion.a
              href={lattesUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ border: '1px solid var(--color-text-muted)', color: 'var(--color-text)' }}
            >
              Currículo Lattes <GraduationCap size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Image Content */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          
          <AbstractProfile />
        </div>

      </div>
      
      {/* Mobile Responsiveness */}
      <style>{`
        @media (max-width: 900px) {
          .hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem;
          }
          .hero h1, .hero h2, .hero h3, .hero p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero div[style*="textAlign: left"] {
            text-align: center !important;
          }
          .hero div[style*="display: flex"] {
            justify-content: center;
          }
          /* Reorder image to top on mobile if desired, or keep at bottom */
          .hero .container > div:last-child {
            order: -1;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
