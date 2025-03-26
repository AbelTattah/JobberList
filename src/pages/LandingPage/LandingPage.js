import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveHeader from '../../components/header/Header';
import ResponsiveFooter from '../../components/footer/Footer';
import CustomButton from '../../components/customButton/CustomButton';
import landingIllustration from '../../assets/images/4408178.jpg';
import { Colors } from '../../constants/Colors';
import "./LandingPage.css"

const LandingPage = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const isMobile = windowWidth < 768;

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div className='landingContainer'>
      <ResponsiveHeader />
        <main className='contentContainer'>
          <div className='textContent'>
            <h1 className='tagline'>
              Congratulations, you have been accepted...
            </h1>
            <p className='supportingText'>
              Your job placement is our priority.<br />
              Join us.
            </p>
           <CustomButton
              onPress={() => navigate('/signup')}
              text="Get Started"
            />
          </div>

          <img
            src={landingIllustration}
            alt="Career illustration"
            className='illustration'
          />
        </main>
        <ResponsiveFooter />
      </div>
  );
};

export default LandingPage;