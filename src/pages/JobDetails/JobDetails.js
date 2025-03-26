import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResponsiveFooter from '../../components/footer/Footer';
import ResponsiveHeader from '../../components/header/Header';
import { Colors } from '../../constants/Colors';
import CustomButton from '../../components/customButton/CustomButton';
import Loader from '../../components/loader/Loader';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMobile = windowWidth < 768;

  const fetchJobDetails = async () => {
    try {
      const response = await fetch(
        `https://api.adzuna.com/v1/api/jobs/gb/${jobId}?app_id=YOUR_ID&app_key=YOUR_KEY`
      );
      
      if (!response.ok) throw new Error('Failed to fetch job details');
      
      const data = await response.json();
      setJob(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (jobId) fetchJobDetails();
  }, [jobId]);

  const handleApply = () => {
    if (job?.redirect_url) {
      window.open(job.redirect_url, '_blank');
    }
  };

  if (loading) return <Loader />;

  if (error || !job) {
    return (
      <div style={styles.errorContainer}>
        <h2 style={styles.errorText}>{error || 'Job not found'}</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <ResponsiveHeader />
      
      <main style={{ ...styles.content, padding: isMobile ? '16px' : '24px' }}>
        {/* Company Header */}
        <section style={styles.companyHeader}>
          <img 
            src={job.company.logo} 
            alt={`${job.company.name} logo`}
            style={styles.logo}
          />
          <div>
            <h1 style={styles.jobTitle}>{job.title}</h1>
            <p style={styles.companyName}>{job.company.name}</p>
            <div style={styles.location}>
              <span role="img" aria-label="Location">📍</span>
              {job.location}
            </div>
          </div>
        </section>

        {/* Job Meta */}
        <div style={styles.metaContainer}>
          <div style={styles.metaItem}>
            <span role="img" aria-label="Salary">💰</span>
            <span style={styles.metaText}>{job.salary || 'Competitive Salary'}</span>
          </div>
          <div style={styles.metaItem}>
            <span role="img" aria-label="Employment type">💼</span>
            <span style={styles.metaText}>{job.contract_type || 'Full-time'}</span>
          </div>
        </div>

        {/* Job Details */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Job Description</h2>
          <p style={styles.bodyText}>{job.description}</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Requirements</h2>
          <ul style={styles.list}>
            {job.requirements?.map((req, index) => (
              <li key={index} style={styles.listItem}>
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Benefits</h2>
          <ul style={styles.list}>
            {job.benefits?.map((benefit, index) => (
              <li key={index} style={styles.listItem}>
                {benefit}
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Fixed Apply Button */}
      <div style={styles.applyContainer}>
        <CustomButton 
          onClick={handleApply}
          text="Apply Now"
          style={styles.applyButton}
          textStyle={styles.applyButtonText}
        />
      </div>

      <ResponsiveFooter />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '100px',
  },
  companyHeader: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    marginBottom: '24px',
  },
  logo: {
    width: '80px',
    height: '80px',
    borderRadius: '16px',
    objectFit: 'contain',
  },
  jobTitle: {
    fontSize: '24px',
    fontWeight: 700,
    color: Colors.text,
    margin: '0 0 4px 0',
  },
  companyName: {
    fontSize: '18px',
    color: Colors.textSecondary,
    margin: '0 0 4px 0',
  },
  location: {
    fontSize: '16px',
    color: Colors.textSecondary,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  metaContainer: {
    display: 'flex',
    gap: '24px',
    marginBottom: '24px',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  metaText: {
    fontSize: '16px',
    color: Colors.text,
  },
  section: {
    marginBottom: '32px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: Colors.text,
    margin: '0 0 16px 0',
  },
  bodyText: {
    fontSize: '16px',
    lineHeight: '24px',
    color: Colors.textSecondary,
    margin: 0,
  },
  list: {
    paddingLeft: '20px',
    margin: 0,
  },
  listItem: {
    marginBottom: '8px',
    lineHeight: '24px',
  },
  applyContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.background,
    borderTop: `1px solid ${Colors.border}`,
    padding: '16px',
    textAlign: 'center',
  },
  applyButton: {
    backgroundColor: Colors.primary,
    borderRadius: '8px',
    padding: '12px 24px',
  },
  applyButtonText: {
    fontSize: '18px',
    fontWeight: 600,
    color: 'white',
  },
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  errorText: {
    color: Colors.error,
    fontSize: '18px',
    textAlign: 'center',
    padding: '20px',
  },
};

export default JobDetailPage;