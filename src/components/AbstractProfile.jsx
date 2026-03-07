import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase } from 'lucide-react';

const AbstractProfile = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{ 
        width: '100%', 
        maxWidth: '400px',
        aspectRatio: '1/1',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Circular Image Container */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid var(--color-primary)',
        boxShadow: '0 0 20px rgba(0, 191, 255, 0.2)',
        background: 'linear-gradient(45deg, var(--color-secondary), var(--color-bg-secondary))',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Abstract decorative elements */}
        <div style={{ 
          position: 'absolute', 
          top: '-50%', 
          left: '-50%', 
          width: '200%', 
          height: '200%', 
          background: 'radial-gradient(circle, rgba(0,191,255,0.1) 0%, transparent 70%)', 
          animation: 'spin 10s linear infinite'
        }}></div>
        
        <img 
          src="/profile.jpeg" 
          alt="Helen Laís" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'top',
            zIndex: 1 
          }} 
        />
      </div>
      
      {/* Floating Cards */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          position: 'absolute', 
          top: '15%', 
          right: '-20px', 
          background: 'var(--color-bg-secondary)', 
          padding: '0.8rem', 
          borderRadius: '10px', 
          border: '1px solid var(--color-text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: 'var(--shadow-card)',
          zIndex: 2
        }}
      >
        <Code size={18} color="var(--color-primary)" />
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-heading)' }}>Clean Code</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ 
          position: 'absolute', 
          bottom: '15%', 
          left: '-20px', 
          background: 'var(--color-bg-secondary)', 
          padding: '0.8rem', 
          borderRadius: '10px', 
          border: '1px solid var(--color-text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: 'var(--shadow-card)',
          zIndex: 2
        }}
      >
        <Briefcase size={18} color="var(--color-primary)" />
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-heading)' }}>Problem Solver</span>
      </motion.div>
    </motion.div>
  );
};

export default AbstractProfile;
