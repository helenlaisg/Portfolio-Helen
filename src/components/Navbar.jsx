import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Formação', href: '#education' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Pesquisa', href: '#academic-research-projects' },
    { name: 'Externos', href: '#external-projects' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Pequeno delay para permitir o feedback visual antes de navegar
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: scrolled ? 'var(--color-nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: 'var(--color-heading)', display: 'flex', alignItems: 'center', gap: '5px' }}>
          HELEN<span style={{ color: 'var(--color-primary)' }}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          <style>{`
            @media (min-width: 768px) {
              .desktop-menu { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--color-text-muted)',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px'
            }}
            title={theme === 'dark' ? "Mudar para modo claro" : "Mudar para modo escuro"}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="/cv/Currículo_HelenLais_Atualizado.pdf"
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Currículo
          </a>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="mobile-toggle" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'transparent', border: 'none', color: 'var(--color-heading)', cursor: 'pointer' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--color-nav-bg)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden',
              borderBottom: '1px solid var(--color-border)'
            }}
          >
            <div className="container" style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  whileTap={{ scale: 0.95, color: 'var(--color-primary)' }}
                  style={{
                    color: 'var(--color-text)',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    cursor: 'pointer',
                    padding: '10px',
                    width: '100%'
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="/cv/Currículo_HelenLais_Atualizado.pdf"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Currículo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
