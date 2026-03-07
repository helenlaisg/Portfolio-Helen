import React, { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Substitua 'SEU_ID_DO_FORMSPREE' pelo ID do seu formulário (ex: xqnlerqz)
    // Crie uma conta gratuita em https://formspree.io/ para obter seu ID
    const formspreeId = 'xwvrejbw'; 

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--color-bg-secondary)', padding: '100px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-heading)' }}>
            Vamos <span className="text-gradient">Conversar</span>?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Estou disponível para novos projetos e oportunidades. Entre em contato por e-mail ou pelas minhas redes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Contact Info & WhatsApp */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-heading)' }}>Informações de Contato</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', 
                  borderRadius: '50%', 
                  background: 'rgba(0, 191, 255, 0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-primary)'
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--color-heading)' }}>E-mail</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>helenlais480@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', 
                  borderRadius: '50%', 
                  background: 'rgba(0, 191, 255, 0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-primary)'
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--color-heading)' }}>Localização</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>Brasil</p>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-heading)' }}>Minhas Redes</h4>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a 
                    href="https://github.com/helen2411" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: 'var(--color-text-muted)', 
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      borderRadius: '50%',
                      background: 'var(--color-card-bg)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                      e.currentTarget.style.background = 'rgba(0, 191, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-muted)';
                      e.currentTarget.style.background = 'var(--color-card-bg)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Github size={40} />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/helen-la%C3%ADs-6658b4297/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: 'var(--color-text-muted)', 
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      borderRadius: '50%',
                      background: 'var(--color-card-bg)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                      e.currentTarget.style.background = 'rgba(0, 191, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-muted)';
                      e.currentTarget.style.background = 'var(--color-card-bg)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Linkedin size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'var(--color-card-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'var(--color-card-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Sua Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'var(--color-card-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text)',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.3s'
                  }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="btn btn-primary" 
                style={{ 
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  background: 'transparent',
                  border: '1px solid #00BFFF',
                  color: '#00BFFF',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  opacity: status === 'sending' ? 0.7 : 1
                }}
              >
                {status === 'sending' ? 'Enviando...' : (
                  <>
                    Enviar Mensagem <Send size={18} />
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <p style={{ color: '#00ff00', textAlign: 'center', marginTop: '1rem' }}>
                  Mensagem enviada com sucesso! Em breve entrarei em contato.
                </p>
              )}
              
              {status === 'error' && (
                <p style={{ color: '#ff0000', textAlign: 'center', marginTop: '1rem' }}>
                  Erro ao enviar mensagem. Por favor, tente novamente ou envie diretamente para helenlais480@gmail.com
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
