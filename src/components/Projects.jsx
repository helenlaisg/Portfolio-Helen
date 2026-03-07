import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: 'Aplicativo PWA - Participa DF (Hackathon)',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA', 'IA'],
    description: 'Desenvolvido para o 1º Hackathon em Controle Social da CGDF. O Participa DF é um PWA que facilita a comunicação entre cidadãos e o Governo do Distrito Federal, permitindo o registro de manifestações (denúncias, sugestões, elogios) de forma acessível e eficiente, utilizando IA e geolocalização.',
    repoLink: 'https://github.com/helen2411/Aplicativo-PWA-Participa-DF',
    demoLink: '#',
    videoUrl: '/videos/aplicativo-ParticipaDF.mp4'
  },
  {
    id: 2,
    title: 'Oco Plus (Hackathon)',
    tech: ['PHP', 'Laravel', 'Python', 'JavaScript', 'MySQL'],
    description: 'Desenvolvido para o Hackathon Forecast 2025 da Big Data. O projeto Oco Plus resolve o desafio de prever a próxima compra de clientes (Suggested Order) para otimizar a reposição no varejo. Como Data Scientist, desenvolvi modelos de Machine Learning para analisar grandes volumes de dados e gerar insights estratégicos.',
    repoLink: 'https://github.com/helen2411/OcoPlusApp',
    demoLink: '#',
    videoUrl: 'PLACEHOLDER_VIDEO_URL' // Insira a URL do vídeo aqui
  },
  {
    id: 3,
    title: 'Divino Donuts - E-commerce',
    tech: ['PHP', 'JavaScript', 'CSS3', 'HTML5', 'JSON'],
    description: 'Projeto Full Stack de e-commerce desenvolvido no Senai. Sistema robusto com autenticação de usuários, catálogo dinâmico de produtos, carrinho de compras persistente e gestão de pedidos, utilizando PHP e armazenamento em arquivos JSON.',
    repoLink: 'https://github.com/helen2411/Divino_Donuts',
    demoLink: '#',
    videoUrl: '/videos/projeto-divinodonuts.mp4'
  },
  {
    id: 4,
    title: 'Outros Projetos & Repositórios',
    tech: ['Open Source', 'Full Stack', 'Frontend', 'Backend'],
    description: 'Explore mais projetos no meu GitHub! Lá você encontrará diversos repositórios públicos, estudos e aplicações em desenvolvimento. Sinta-se à vontade para explorar, clonar e contribuir.',
    repoLink: 'https://github.com/helen2411?tab=repositories',
    demoLink: '#',
    videoUrl: 'PLACEHOLDER_VIDEO_URL' // Insira a URL do vídeo aqui
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
            Meus <span className="text-gradient">Projetos</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '4px', 
                  background: 'linear-gradient(90deg, var(--color-primary), transparent)' 
                }} />
                
                <Folder size={40} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-heading)' }}>{project.title}</h3>
                
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {project.description.substring(0, 100)}...
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', background: 'var(--color-card-bg)', padding: '2px 8px', borderRadius: '4px' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                  Ver Detalhes <ArrowRight size={16} style={{ marginLeft: '5px' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
