import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-bg-secondary)', padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Helen. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
