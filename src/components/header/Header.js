import React, { useState, useEffect, useCallback } from 'react';
import "./Header.css"
import { useNavigate } from 'react-router-dom';

/**
 * Responsive header component with mobile menu functionality
 * @param {Object} props - Component properties
 * @param {Function} props.onSignupPress - Signup button handler
 * @param {Function} props.onLoginPress - Login button handler
 * @param {Function} props.onLearnMorePress - Learn More button handler
 * @param {Function} props.onMenuToggle - Menu toggle callback
 * @param {Function} props.onClosePress - Menu close callback
 */
const ResponsiveHeader = ({
  onSignupPress = () => {},
  onLoginPress = () => {},
  onLearnMorePress = () => {},
  onMenuToggle = () => {},
  onClosePress = () => {},
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;
  const navigation = useNavigate();

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle();
    if (isMenuOpen) onClosePress();
  };

  const headerStyles = {
    padding: `16px ${isMobile ? '16px' : '24px'}`,
    logoSize: isMobile ? '20px' : '24px',
    linkSize: isMobile ? '14px' : '16px',
    linkGap: isMobile ? '16px' : '24px',
  };

  return (
    <header className='header'>
      <h1 className='logo' style={{  fontSize: headerStyles.logoSize }} onClick={()=>navigation("/")}>JOBBERLIST</h1>
      {!isMobile ? (
        <nav className='HeaderlinksContainer' style={{gap: headerStyles.linkGap }}>
          <button onClick={()=>navigation("/signup")} className='navButton text'>
            Signup
          </button>
          <button onClick={()=>navigation("/login")} className='navButton text'>
            Login
          </button>
          <button onClick={onLearnMorePress} className='navButton text'>
            Learn More
          </button>
        </nav>
      ) : (
        <>
          <button onClick={toggleMenu}  className='hamBurger'>
            <div className='hamburgerLine' />
            <div className='hamburgerLine'/>
            <div className='hamburgerLine' />
          </button>

          {isMenuOpen && (
            <>
              <div className='overlay' onClick={toggleMenu} />
              
              <div className='mobileMenu'>
                <button onClick={toggleMenu} className='closeButton'>
                  ×
                </button>
                <div className='mobileMenuContent'>
                  <button onClick={()=>navigation("/signup")} className='mobileMenuItem text'>
                    Signup
                  </button>
                  <button onClick={()=>navigation("/login")} className='mobileMenuItem text'>
                    Login
                  </button>
                  <button onClick={onLearnMorePress} className='mobileMenuItem text'>
                    Learn More
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </header>
  );
};


export default ResponsiveHeader;