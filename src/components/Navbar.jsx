import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4%',
        height: '68px',
        background: scrolled
          ? 'rgba(0,0,0,0.95)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Netflix Logo - img tag for reliability */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
        style={{
          height: '32px',
          width: 'auto',
          display: 'block',
          flexShrink: 0,
        }}
      />

      {/* Sign In Button */}
      <button
        style={{
          backgroundColor: '#E50914',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '7px 17px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          transition: 'background 0.2s',
          flexShrink: 0,
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#f6121d')}
        onMouseLeave={e => (e.currentTarget.style.background = '#E50914')}
      >
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;