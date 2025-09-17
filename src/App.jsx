import React, { useState, useEffect } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Apply global styles to eliminate horizontal scroll
    const style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
      }
      
      html {
        overflow-x: hidden;
        max-width: 100%;
        width: 100%;
      }
      
      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        max-width: 100%;
        width: 100%;
      }
      
      #root {
        overflow-x: hidden;
        max-width: 100%;
        width: 100%;
      }
    `;
    document.head.appendChild(style);

    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      // Clean up the style when component unmounts
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // CSS-in-JS styles with AGGRESSIVE OVERFLOW PREVENTION
  const styles = {
    portfolio: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      lineHeight: 1.6,
      transition: 'all 0.5s ease',
      backgroundColor: isDarkMode ? '#0a0a0a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#1a202c',
      minHeight: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      overflowX: 'hidden',
      position: 'relative',
      margin: 0,
      padding: 0,
    },
    
    // Loading Screen Styles - BLUE THEME
    loadingScreen: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: `linear-gradient(135deg, ${isDarkMode ? '#1e3a8a' : '#1e40af'}, ${isDarkMode ? '#1e40af' : '#3b82f6'}, ${isDarkMode ? '#3b82f6' : '#60a5fa'})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      opacity: isLoading ? 1 : 0,
      visibility: isLoading ? 'visible' : 'hidden',
      transition: 'opacity 0.5s ease, visibility 0.5s ease',
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
    },
    loadingContent: {
      textAlign: 'center',
      color: '#ffffff',
      width: '90%',
      maxWidth: '500px',
      padding: '0 1rem',
    },
    loadingTitle: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 'bold',
      marginBottom: '2rem',
      background: 'linear-gradient(45deg, #3b82f6, #1d4ed8, #2563eb, #60a5fa, #93c5fd)',
      backgroundSize: '400% 400%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'gradientShift 3s ease-in-out infinite',
      wordBreak: 'break-word',
      hyphens: 'auto',
    },
    loadingBar: {
      width: '100%',
      maxWidth: '300px',
      height: '4px',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '2px',
      overflow: 'hidden',
      position: 'relative',
      margin: '0 auto',
    },
    loadingProgress: {
      height: '100%',
      background: 'linear-gradient(90deg, #3b82f6, #1d4ed8, #2563eb)',
      borderRadius: '2px',
      width: `${Math.min(loadingProgress, 100)}%`,
      transition: 'width 0.3s ease',
      position: 'relative',
    },
    loadingText: {
      marginTop: '1rem',
      fontSize: '1.2rem',
      opacity: 0.8,
    },
    
    // Theme Toggle with SVG Icons
    themeToggle: {
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: 1000,
    },
    themeBtn: {
      background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: isDarkMode ? '0 8px 32px rgba(59, 130, 246, 0.2)' : '0 8px 32px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'scale(1)',
    },
    
    // Hero Section with BLUE Particle Background
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1e3a8a 50%, #1e40af 100%)'
        : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #2563eb 100%)',
      margin: 0,
      padding: 0,
    },
    heroParticles: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflowX: 'hidden',
    },
    particle: {
      position: 'absolute',
      borderRadius: '50%',
      background: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255,255,255,0.3)',
      animation: 'float 6s ease-in-out infinite',
    },
    heroContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
      boxSizing: 'border-box',
      textAlign: 'center',
    },
    heroText: {
      animation: 'slideInLeft 1s ease-out',
      maxWidth: '100%',
      overflow: 'hidden',
      width: '100%',
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 8vw, 4rem)',
      fontWeight: 900,
      marginBottom: '1rem',
      lineHeight: 1.1,
      wordBreak: 'break-word',
      maxWidth: '100%',
      hyphens: 'auto',
    },
    name: {
      display: 'block',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      animation: 'typewriter 2s steps(20) 0.5s both',
    },
    brand: {
      display: 'block',
      background: 'linear-gradient(45deg, #3b82f6, #1d4ed8, #2563eb, #60a5fa)',
      backgroundSize: '400% 400%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'gradientShift 3s ease-in-out infinite, bounceIn 1s ease-out 1s both',
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 4vw, 1.5rem)',
      color: 'rgba(255,255,255,0.9)',
      marginBottom: '2rem',
      animation: 'fadeInUp 1s ease-out 1.5s both',
      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
      maxWidth: '100%',
      wordBreak: 'break-word',
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      animation: 'fadeInUp 1s ease-out 2s both',
      flexWrap: 'wrap',
      maxWidth: '100%',
      justifyContent: 'center',
    },
    btnPrimary: {
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 700,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
      color: 'white',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      minWidth: 'fit-content',
    },
    btnSecondary: {
      padding: '1rem 2rem',
      border: '2px solid rgba(255,255,255,0.3)',
      borderRadius: '50px',
      fontWeight: 700,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      minWidth: 'fit-content',
    },
    
    // 3D Floating Elements - BLUE THEME
    heroVisual: {
      position: 'relative',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'slideInRight 1s ease-out',
      maxWidth: '100%',
      overflow: 'visible',
      width: '100%',
      perspective: '1000px',
    },
    
    // MacBook Animation Styles
    macbook: {
      position: 'relative',
      width: 'clamp(280px, 50vw, 450px)',
      height: 'clamp(175px, 30vw, 280px)',
      transformStyle: 'preserve-3d',
      animation: 'macbookFloat 6s ease-in-out infinite',
      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))',
    },
    macbookBase: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: 'clamp(18px, 4vw, 28px)',
      background: 'linear-gradient(145deg, #e5e7eb, #9ca3af, #6b7280)',
      borderRadius: '0 0 15px 15px',
      boxShadow: '0 15px 40px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
      zIndex: 2,
      border: '1px solid #9ca3af',
    },
    macbookLid: {
      position: 'absolute',
      bottom: 'clamp(18px, 4vw, 28px)',
      left: '0',
      width: '100%',
      height: 'clamp(157px, 26vw, 252px)',
      background: 'linear-gradient(145deg, #f9fafb, #e5e7eb, #d1d5db)',
      borderRadius: '15px 15px 5px 5px',
      transformOrigin: 'bottom center',
      animation: 'macbookOpen 4s ease-out 0.5s both',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4)',
      border: '1px solid #d1d5db',
    },
    macbookScreen: {
      position: 'absolute',
      top: 'clamp(12px, 3vw, 18px)',
      left: 'clamp(12px, 3vw, 18px)',
      right: 'clamp(12px, 3vw, 18px)',
      bottom: 'clamp(20px, 5vw, 32px)',
      background: isDarkMode 
        ? 'linear-gradient(145deg, #000000, #1a1a2e, #16213e)' 
        : 'linear-gradient(145deg, #000000, #1e40af, #3b82f6)',
      borderRadius: 'clamp(6px, 2vw, 12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      border: '2px solid #000000',
    },
    macbookScreenContent: {
      color: 'white',
      textAlign: 'center',
      fontSize: 'clamp(12px, 2.5vw, 18px)',
      fontWeight: 'bold',
      opacity: 0,
      animation: 'screenContentFadeIn 1.5s ease-out 4s both',
      zIndex: 2,
    },
    macbookKeyboard: {
      position: 'absolute',
      bottom: '2px',
      left: 'clamp(12px, 3vw, 18px)',
      right: 'clamp(12px, 3vw, 18px)',
      height: 'clamp(12px, 3vw, 18px)',
      background: 'linear-gradient(145deg, #374151, #1f2937, #111827)',
      borderRadius: '6px',
      zIndex: 3,
      border: '1px solid #1f2937',
    },
    macbookAppleLogo: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 'clamp(16px, 4vw, 24px)',
      height: 'clamp(16px, 4vw, 24px)',
      background: 'linear-gradient(145deg, #9ca3af, #6b7280)',
      borderRadius: '50%',
      opacity: 0.7,
    },
    
    floatingShape: {
      position: 'absolute',
      borderRadius: '20px',
      background: 'linear-gradient(45deg, #3b82f6, #1d4ed8, #2563eb)',
      animation: 'float3D 8s ease-in-out infinite',
      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
    },
    
    // Section Styles
    section: {
      padding: '4rem 0',
      position: 'relative',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      margin: 0,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 900,
      textAlign: 'center',
      marginBottom: '3rem',
      background: isDarkMode 
        ? 'linear-gradient(45deg, #3b82f6, #1d4ed8)' 
        : 'linear-gradient(45deg, #1e40af, #3b82f6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'slideInUp 0.8s ease-out',
      wordBreak: 'break-word',
      maxWidth: '100%',
      hyphens: 'auto',
    },
    
    // Glowing Cards - BLUE THEME
    glowCard: {
      background: isDarkMode 
        ? 'linear-gradient(145deg, #1a1a2e, #1e3a8a)' 
        : 'linear-gradient(145deg, #ffffff, #f0f8ff)',
      padding: '2rem',
      borderRadius: '20px',
      textAlign: 'center',
      transition: 'all 0.4s ease',
      border: `1px solid ${isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
      boxShadow: isDarkMode 
        ? '0 20px 40px rgba(59, 130, 246, 0.1)' 
        : '0 20px 40px rgba(59, 130, 246, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',
    },
    
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
      width: '100%',
      maxWidth: '100%',
    },
    
    skillIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      display: 'block',
      animation: 'bounce 2s ease-in-out infinite',
    },
    
    // Contact Section - BLUE THEME
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      marginTop: '3rem',
      alignItems: 'start',
      width: '100%',
      maxWidth: '100%',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '2rem',
      padding: '1.5rem',
      background: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: `1px solid ${isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    contactIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      color: 'white',
      flexShrink: 0,
      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
    },
    
    // Form Styles - BLUE THEME
    formGroup: {
      marginBottom: '1.5rem',
      width: '100%',
    },
    formInput: {
      width: '100%',
      padding: '1rem',
      border: `2px solid ${isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
      borderRadius: '10px',
      background: isDarkMode ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.02)',
      color: isDarkMode ? '#ffffff' : '#1a202c',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      boxSizing: 'border-box',
      maxWidth: '100%',
    },
    
    // Footer
    footer: {
      background: isDarkMode ? '#0a0a0a' : '#1e40af',
      color: '#ffffff',
      padding: '2rem 0',
      textAlign: 'center',
      borderTop: `1px solid ${isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255,255,255,0.1)'}`,
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      margin: 0,
    },
  };

  // SVG Icons (unchanged)
  const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
    </svg>
  );

  const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
    </svg>
  );

  const CodeIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.325 3.05L8.667 20.432l1.977.518L15.302 3.568l-1.977-.518zM7.612 18.36l1.414-1.415L4.343 12l4.683-4.945L7.612 5.64L1.515 12l6.097 6.36zM16.388 5.64l-1.414 1.415L19.657 12l-4.683 4.945l1.414 1.415L22.485 12l-6.097-6.36z"/>
    </svg>
  );

  const DesignIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const ToolsIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  const GithubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const WebIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );

  // Aggressive overflow prevention keyframes
  const keyframes = `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes float3D {
      0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
      33% { transform: translateY(-30px) rotateX(15deg) rotateY(15deg); }
      66% { transform: translateY(-10px) rotateX(-10deg) rotateY(-10deg); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes bounceIn {
      0% { transform: scale(0.3); opacity: 0; }
      50% { transform: scale(1.05); }
      70% { transform: scale(0.9); }
      100% { transform: scale(1); opacity: 1; }
    }
    @keyframes typewriter {
      from { width: 0; }
      to { width: 100%; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    @keyframes macbookOpen {
      0% { 
        transform: rotateX(0deg); 
        box-shadow: 0 -10px 30px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4);
      }
      25% { 
        transform: rotateX(-30deg); 
        box-shadow: 0 -15px 40px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.4);
      }
      50% { 
        transform: rotateX(-60deg); 
        box-shadow: 0 -20px 50px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.4);
      }
      75% { 
        transform: rotateX(-90deg); 
        box-shadow: 0 -25px 60px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.4);
      }
      100% { 
        transform: rotateX(-125deg); 
        box-shadow: 0 -30px 70px rgba(0,0,0,0.7), inset 0 2px 4px rgba(255,255,255,0.4);
      }
    }
    @keyframes macbookFloat {
      0%, 100% { transform: translateY(0px) rotateY(-2deg) scale(1); }
      25% { transform: translateY(-15px) rotateY(2deg) scale(1.02); }
      50% { transform: translateY(-8px) rotateY(0deg) scale(1.01); }
      75% { transform: translateY(-20px) rotateY(-1deg) scale(1.02); }
    }
    @keyframes screenContentFadeIn {
      0% { 
        opacity: 0; 
        transform: scale(0.8) translateY(10px); 
      }
      50% { 
        opacity: 0.5; 
        transform: scale(0.9) translateY(5px); 
      }
      100% { 
        opacity: 1; 
        transform: scale(1) translateY(0px); 
      }
    }
  `;

  if (isLoading) {
    return (
      <>
        <style>{keyframes}</style>
        <div style={styles.loadingScreen}>
          <div style={styles.loadingContent}>
            <h1 style={styles.loadingTitle}>RohanWebWorks</h1>
            <div style={styles.loadingBar}>
              <div style={styles.loadingProgress}></div>
            </div>
            <p style={styles.loadingText}>Loading Portfolio... {Math.round(loadingProgress)}%</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.portfolio}>
        {/* Theme Toggle */}
        <div style={styles.themeToggle}>
          <button 
            onClick={toggleTheme} 
            style={{
              ...styles.themeBtn,
              color: isDarkMode ? '#ffffff' : '#000000',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Hero Section */}
        <section style={styles.hero}>
          {/* Floating Particles */}
          <div style={styles.heroParticles}>
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.particle,
                  width: Math.random() * 8 + 4 + 'px',
                  height: Math.random() * 8 + 4 + 'px',
                  left: Math.random() * 90 + '%',
                  top: Math.random() * 90 + '%',
                  animationDelay: Math.random() * 6 + 's',
                  animationDuration: (Math.random() * 3 + 4) + 's',
                }}
              />
            ))}
          </div>

          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <h1 style={styles.heroTitle}>
                <span style={styles.name}>Rohan van Dormolen</span>
                <span style={styles.brand}>RohanWebWorks</span>
              </h1>
              <p style={styles.heroSubtitle}>Frontend Developer • UI/UX Designer</p>
              <div style={styles.heroButtons}>
                <a 
                  href="#projects" 
                  style={styles.btnPrimary}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
                  }}
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  style={styles.btnSecondary}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div style={styles.heroVisual}>
              {/* MacBook Opening Animation */}
              <div style={styles.macbook}>
                {/* MacBook Base */}
                <div style={styles.macbookBase}>
                  <div style={styles.macbookKeyboard}></div>
                </div>
                {/* MacBook Lid/Screen */}
                <div style={styles.macbookLid}>
                  {/* Apple Logo on back of lid */}
                  <div style={styles.macbookAppleLogo}></div>
                  <div style={styles.macbookScreen}>
                    <div style={styles.macbookScreenContent}>
                      <div style={{fontSize: 'clamp(16px, 4vw, 24px)', marginBottom: '8px'}}>💻</div>
                      <div style={{marginBottom: '4px'}}>RohanWebWorks</div>
                      <div style={{fontSize: 'clamp(10px, 2vw, 14px)', opacity: 0.8}}>Frontend Portfolio</div>
                      <div style={{
                        width: '80%', 
                        height: '2px', 
                        background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
                        margin: '8px auto 0',
                        borderRadius: '1px'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating background shapes */}
              <div style={{
                ...styles.floatingShape,
                width: '60px',
                height: '60px',
                top: '5%',
                left: '5%',
                animationDelay: '0s',
                zIndex: -1,
              }}></div>
              <div style={{
                ...styles.floatingShape,
                width: '40px',
                height: '40px',
                top: '75%',
                right: '5%',
                animationDelay: '2s',
                zIndex: -1,
              }}></div>
              <div style={{
                ...styles.floatingShape,
                width: '50px',
                height: '50px',
                bottom: '5%',
                left: '75%',
                animationDelay: '4s',
                zIndex: -1,
              }}></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section style={{...styles.section, background: isDarkMode ? '#111111' : '#f8fafc'}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
              <p style={{fontSize: 'clamp(1rem, 3vw, 1.2rem)', marginBottom: '1.5rem', lineHeight: 1.7}}>
                I'm a passionate Frontend Developer and UI/UX Designer with expertise in creating 
                modern, responsive web applications. I specialize in turning ideas into beautiful, 
                functional digital experiences.
              </p>
              <p style={{fontSize: 'clamp(1rem, 3vw, 1.2rem)', lineHeight: 1.7}}>
                Based in the Netherlands, I work under the brand RohanWebWorks, delivering 
                professional web solutions with attention to detail and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Skills & Expertise</h2>
            <div style={styles.skillsGrid}>
              <div 
                style={styles.glowCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = isDarkMode 
                    ? '0 20px 40px rgba(59, 130, 246, 0.1)' 
                    : '0 20px 40px rgba(59, 130, 246, 0.1)';
                }}
              >
                <div style={{...styles.skillIcon, color: '#3b82f6'}}>
                  <CodeIcon />
                </div>
                <h3 style={{fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', marginBottom: '1rem'}}>Development</h3>
                <p style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)', opacity: 0.8}}>
                  React, JavaScript, HTML5, CSS3, Next.js, TypeScript
                </p>
              </div>
              <div 
                style={styles.glowCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(29, 78, 216, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = isDarkMode 
                    ? '0 20px 40px rgba(59, 130, 246, 0.1)' 
                    : '0 20px 40px rgba(59, 130, 246, 0.1)';
                }}
              >
                <div style={{...styles.skillIcon, color: '#1d4ed8'}}>
                  <DesignIcon />
                </div>
                <h3 style={{fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', marginBottom: '1rem'}}>Design</h3>
                <p style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)', opacity: 0.8}}>
                  Figma, UI/UX Design, Prototyping, Adobe Creative Suite
                </p>
              </div>
              <div 
                style={styles.glowCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(37, 99, 235, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = isDarkMode 
                    ? '0 20px 40px rgba(59, 130, 246, 0.1)' 
                    : '0 20px 40px rgba(59, 130, 246, 0.1)';
                }}
              >
                <div style={{...styles.skillIcon, color: '#2563eb'}}>
                  <ToolsIcon />
                </div>
                <h3 style={{fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', marginBottom: '1rem'}}>Tools</h3>
                <p style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)', opacity: 0.8}}>
                  VSCode, PHPStorm, Git, Docker, Professional Development Suite
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section style={{...styles.section, background: isDarkMode ? '#111111' : '#f8fafc'}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Featured Projects</h2>
            <div style={{...styles.skillsGrid, gridTemplateColumns: '1fr'}}>
              <div style={{
                ...styles.glowCard,
                background: 'linear-gradient(145deg, #3b82f6, #1d4ed8)',
                color: 'white',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <div style={{fontSize: 'clamp(3rem, 8vw, 4rem)', marginBottom: '1rem'}}>🚀</div>
                <h3 style={{fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1rem'}}>Amazing Projects Coming Soon</h3>
                <p style={{fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', opacity: 0.9}}>
                  Exciting innovative projects are currently in development. 
                  Stay tuned for cutting-edge web applications and designs!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Info Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>About This Portfolio</h2>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <p style={{fontSize: 'clamp(1rem, 3vw, 1.2rem)', marginBottom: '2rem', lineHeight: 1.7, textAlign: 'center'}}>
                This portfolio showcases the intersection of creativity and technology. Built with React and modern web technologies:
              </p>
              <div style={styles.skillsGrid}>
                {[
                  'Responsive design for all devices',
                  'Dark/light mode with smooth transitions',
                  'Eye-catching animations and interactions',
                  'Modern glassmorphism design elements',
                  'Optimized performance and accessibility'
                ].map((feature, index) => (
                  <div key={index} style={{
                    ...styles.glowCard,
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                      flexShrink: 0
                    }}></div>
                    <span style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)'}}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{...styles.section, background: isDarkMode ? '#111111' : '#f8fafc'}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Let's Connect</h2>
            <div style={styles.contactGrid}>
              <div>
                <div 
                  style={styles.contactItem}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={styles.contactIcon}>
                    <EmailIcon />
                  </div>
                  <div style={{overflow: 'hidden', flex: 1}}>
                    <h3 style={{fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '0.5rem'}}>Email</h3>
                    <a 
                      href="mailto:Rohanwebworks@outlook.com" 
                      style={{
                        color: isDarkMode ? '#60a5fa' : '#1d4ed8',
                        textDecoration: 'none',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        wordBreak: 'break-all'
                      }}
                    >
                      Rohanwebworks@outlook.com
                    </a>
                  </div>
                </div>
                <div 
                  style={styles.contactItem}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={styles.contactIcon}>
                    <GithubIcon />
                  </div>
                  <div style={{overflow: 'hidden', flex: 1}}>
                    <h3 style={{fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '0.5rem'}}>GitHub</h3>
                    <a 
                      href="https://github.com/Rohaneke" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: isDarkMode ? '#60a5fa' : '#1d4ed8',
                        textDecoration: 'none',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        wordBreak: 'break-all'
                      }}
                    >
                      github.com/Rohaneke
                    </a>
                  </div>
                </div>
                <div 
                  style={styles.contactItem}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={styles.contactIcon}>
                    <WebIcon />
                  </div>
                  <div style={{overflow: 'hidden', flex: 1}}>
                    <h3 style={{fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', marginBottom: '0.5rem'}}>Domain</h3>
                    <span style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)', wordBreak: 'break-all'}}>RohanvanDormolen.nl</span>
                  </div>
                </div>
              </div>
              
              <div style={styles.glowCard}>
                <h3 style={{fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', marginBottom: '1.5rem'}}>Send a Message</h3>
                <form>
                  <div style={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      style={styles.formInput}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      style={styles.formInput}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      required
                      style={{...styles.formInput, resize: 'vertical', minHeight: '100px'}}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}
                    />
                  </div>
                  <button 
                    type="submit" 
                    style={{
                      ...styles.btnPrimary,
                      width: '100%',
                      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.container}>
            <p style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)', opacity: 0.8}}>
              &copy; 2024 RohanWebWorks. Crafted with passion and precision.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;