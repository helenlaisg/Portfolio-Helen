import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [onClose]);

  const modal = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--color-overlay)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .modal-content {
            max-width: 95% !important;
            margin: 0 10px;
          }
          .modal-inner {
            padding: 1.25rem !important;
          }
          .modal-title {
            font-size: 1.3rem !important;
            padding-right: 40px !important;
            margin-bottom: 0.75rem !important;
          }
          .video-container {
            height: auto !important;
            min-height: 200px;
            margin-bottom: 1rem !important;
          }
          .close-button {
            top: 8px !important;
            right: 8px !important;
            width: 28px !important;
            height: 28px !important;
          }
          .tech-tag {
            font-size: 0.75rem !important;
            padding: 3px 10px !important;
          }
          .modal-description {
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
          }
          .tech-container {
            gap: 0.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          .action-buttons {
            flex-direction: column;
            width: 100%;
          }
          .action-buttons a {
            width: 100%;
            justify-content: center;
          }
        }
        
        /* Estilos do botão de fechar */
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--color-card-bg);
          border: none;
          color: var(--color-heading);
          cursor: pointer;
          z-index: 10;
          border-radius: 50% !important;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
          outline: none !important;
          -webkit-tap-highlight-color: transparent;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        
        .close-button:focus {
          outline: none !important;
        }
        
        /* Efeito de active para feedback tátil em mobile */
        .close-button:active {
          transform: scale(0.9);
          background-color: var(--color-primary) !important;
        }
        
        /* Hover apenas para dispositivos que suportam hover (desktop) */
        @media (hover: hover) {
          .close-button:hover {
            background-color: var(--color-primary) !important;
          }
        }
      `}</style>
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="modal-content"
        style={{
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-primary)',
          borderRadius: '16px',
          maxWidth: '550px',
          width: '90%',
          maxHeight: '80vh',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          position: 'relative',
          boxShadow: '0 0 50px rgba(0, 191, 255, 0.2)'
        }}
      >
        <button
          onClick={onClose}
          className="close-button"
        >
          <X size={20} />
        </button>

        <div style={{ padding: '1.25rem' }} className="modal-inner">
          <h2 className="modal-title" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-heading)', paddingRight: '3rem' }}>{project.title}</h2>
          
          <div className="video-container" style={{ 
            width: '100%', 
            minHeight: '200px',
            background: '#000', 
            marginBottom: '1rem', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-muted)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* ÁREA DO VÍDEO: Se houver uma URL de vídeo válida, exibe um iframe ou tag de vídeo. Caso contrário, exibe a imagem ou placeholder. */}
            {project.videoUrl && project.videoUrl !== 'PLACEHOLDER_VIDEO_URL' ? (
              project.videoUrl.match(/\.(mp4|webm|ogg)$/) ? (
                <video controls style={{ maxWidth: '100%', maxHeight: '35vh', borderRadius: '8px' }}>
                  <source src={project.videoUrl} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              ) : (
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={project.videoUrl} 
                  title={project.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )
            ) : project.videoUrl === 'PLACEHOLDER_VIDEO_URL' ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <p style={{ marginBottom: '10px', fontSize: '1.2rem' }}>🎥 Espaço reservado para o vídeo</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Em breve o vídeo será anexado! Mas enquanto isso fique a vontade para acessar o repositório do projeto!</p>
              </div>
            ) : (
             <img src={`https://placehold.co/800x400/001F3F/00BFFF?text=${project.title}`} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            )}
          </div>

          <div className="tech-container" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-tag" style={{ 
                background: 'rgba(0, 191, 255, 0.1)', 
                color: 'var(--color-primary)', 
                padding: '4px 12px', 
                borderRadius: '20px',
                fontSize: '0.85rem',
                border: '1px solid rgba(0, 191, 255, 0.3)'
              }}>
                {tech}
              </span>
            ))}
          </div>

          <p className="modal-description" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
            {project.description}
          </p>

          <div className="action-buttons" style={{ display: 'flex', gap: '1rem' }}>
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Github size={18} /> Ver Repositório
              </a>
            )}
            {project.demoLink && project.demoLink !== '#' && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(modal, document.body);
};

export default ProjectModal;
