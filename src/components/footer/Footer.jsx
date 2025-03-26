import React, { useState, useEffect } from 'react';
import "./Footer.css"

const ResponsiveFooter = ({
  onAboutPress = () => {},
  onContactPress = () => {},
  onBlogPress = () => {},
  onPrivacyPress = () => {},
  onTermsPress = () => {},
  onCookiePress = () => {},
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className='footerContainer'>
      <div className='columnsWrapper'>
        {/* Company Info */}
        <div className='section'>
          <h3 style={styles.heading}>JOBBERLIST</h3>
          <p className='text'>Connecting professionals with opportunities</p>
        </div>

        {/* Quick Links */}
        <div className='linksContainer'>
          <button onClick={onAboutPress} className='link text'>
            About Us
          </button>
          <button onClick={onContactPress} className='link text'>
            Contact
          </button>
          <button onClick={onBlogPress} className='link text'>
            Blog
          </button>
        </div>

        {/* Legal Links */}
        <div className='linksContainer'>
          <button onClick={onPrivacyPress} className='link text'>
            Privacy Policy
          </button>
          <button onClick={onTermsPress} className='link text'>
            Terms of Service
          </button>
          <button onClick={onCookiePress} className='link text'>
            Cookie Policy
          </button>
        </div>
      </div>
      <div className='divider' />
      <p className='copyright text'>
        © {new Date().getFullYear()} Jobberlist. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  
};

export default ResponsiveFooter;