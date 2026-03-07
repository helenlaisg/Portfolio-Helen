import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Briefcase, Server, ChevronRight, ExternalLink } from 'lucide-react';

const externalProjects = [
  {
    id: 1,
    title: 'Projeto SDENG',
    context: 'Sistema de Engenharia/Fiscalização',
    classification: 'Desenvolvimento e Manutenção de Sistemas (Full-Stack)',
    description: [
      'Desenvolvimento e reajuste de rotas e funcionalidades para o sistema de QR Code voltado a chamados.',
      'Implementação de lógicas de notificação de assinatura eletrônica.',
      'Criação e manutenção de CRUDs de Fiscalização de Obras e cadastros fiscais.',
      'Correção e otimização de exportações de dados para PDF (Ajuste de PDF Autorizadas e Correção SDENG).'
    ],
    tech: ['Sistema Web', 'Gestão de Rotas', 'Geração de PDF', 'Assinatura Eletrônica'],
    articleLink: 'https://www.gov.br/hfa/pt-br/noticias/materias-2026/marco/divinfra-e-dti-entregam-inovacao-e-economicidade-na-gestao-de-chamados-no-sgp',
    icon: <Briefcase size={24} />
  },
  {
    id: 2,
    title: 'Projeto PGD/PDP',
    context: 'Programa de Gestão e Desempenho',
    classification: 'Desenvolvimento e Manutenção de Sistemas (Full-Stack)',
    description: [
      'Implementação de Gráficos de Gantt para visualização de cronogramas de Contratos DTI.',
      'Desenvolvimento de lógicas complexas de Aprovação/Rejeição (DTEP) em múltiplas etapas.',
      'Criação de CRUDs para Chefes Aprovadores, Categorias e Etiquetas.',
      'Estruturação de Planos de Trabalho e correção de históricos do PGD.',
      'Migração técnica e testes utilizando Laravel 10 para atualizações do PDP.'
    ],
    tech: ['Laravel 10', 'Gantt Charts', 'Gestão de Fluxos', 'Migração de Sistemas'],
    icon: <Shield size={24} />
  },
  {
    id: 3,
    title: 'Desenvolvimento de APIs & BI',
    context: 'Integrações e Relatórios Gerenciais',
    classification: 'Integrações e Engenharia de Dados',
    description: [
      'Integração e consumo de APIs governamentais para automação de cadastros (SIORG, IBGE).',
      'Criação de telas de visualização de dados.',
      'Desenvolvimento de relatórios automatizados com exportação para Excel e PDF (Manutenção, Saúde, Veículos e Estoque).',
      'Implementação de Gráficos via CSS/JS para painéis gerenciais do DRH.'
    ],
    tech: ['APIs Governamentais', 'Integração SIORG/IBGE', 'Relatórios Excel/PDF', 'Dashboards'],
    icon: <Lock size={24} />
  },
  {
    id: 4,
    title: 'Gestão de Estoque e Suporte',
    context: 'Suporte Técnico e Versionamento',
    classification: 'Infraestrutura e Qualidade',
    description: [
      'Desenvolvimento de módulos para Entrada e Saída de Produtos e manutenção de estoque.',
      'Atendimento e resolução de chamados técnicos de Suporte DTI e ajustes em negativas de exames.',
      'Gestão ativa de branches e Merge Requests em ambiente colaborativo GitLab, garantindo a integridade do código em produção (CI/CD).'
    ],
    tech: ['GitLab CI/CD', 'Gestão de Estoque', 'Suporte Técnico', 'Code Review'],
    icon: <Server size={24} />
  }
];

const ExternalProjects = () => {
  return (
    <section id="external-projects" className="section">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
            Projetos <span className="text-gradient">Externos</span>
          </h2>
          <p style={{ 
            textAlign: 'center', 
            maxWidth: '900px', 
            margin: '0 auto 3rem auto', 
            color: 'var(--color-text-muted)' 
          }}>
            Contribuições em projetos corporativos onde o código é proprietário e confidencial.
            Foco na entrega de valor e resolução de problemas complexos.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {externalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-card)' }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ 
                    background: 'rgba(0, 191, 255, 0.1)', 
                    padding: '10px', 
                    borderRadius: '50%',
                    color: 'var(--color-primary)'
                  }}>
                    {project.icon}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '5px',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    border: '1px solid var(--color-border)',
                    padding: '4px 8px',
                    borderRadius: '20px'
                  }}>
                    <Lock size={12} />
                    <span>Confidencial</span>
                  </div>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-heading)' }}>{project.title}</h3>
                
                <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '500' }}>
                  {project.context}
                </p>

                {project.classification && (
                  <p style={{ 
                    display: 'inline-block',
                    background: 'var(--color-card-bg)',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.8rem',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                    border: '1px solid var(--color-border)'
                  }}>
                    {project.classification}
                  </p>
                )}
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                  {project.description.map((item, index) => (
                    <li key={index} style={{ 
                      marginBottom: '0.5rem', 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '0.5rem', 
                      color: 'var(--color-text-muted)', 
                      fontSize: '0.95rem', 
                      lineHeight: '1.6' 
                    }}>
                      <ChevronRight size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '4px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {project.articleLink && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <a 
                      href={project.articleLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        border: '1px solid var(--color-primary)',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 191, 255, 0.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <ExternalLink size={16} />
                      Confira o Link da matéria
                    </a>
                  </div>
                )}

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Tecnologias:</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tech.map((t, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.8rem', 
                        color: 'var(--color-text)', 
                        background: 'var(--color-card-bg)', 
                        padding: '2px 8px', 
                        borderRadius: '4px',
                        border: '1px solid var(--color-border)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExternalProjects;
