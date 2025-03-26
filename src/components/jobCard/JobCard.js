import React from 'react';
import { Colors } from '../../constants/Colors';
import "./JobCard.css"

/**
 * JobCard component displays a job posting card with company details
 * @param {Object} props - Component properties
 * @param {string} props.logo - URL for company logo
 * @param {string} props.jobDescription - Job title/description
 * @param {string} props.organizationName - Company name
 * @param {string} props.location - Job location
 * @param {string} props.experienceLevel - Required experience
 * @param {string} props.salary - Salary range
 * @returns {JSX.Element} Job card component
 */


const JobCard = ({ job }) => {
  const companyLogo = job.company?.logo || 'https://via.placeholder.com/60';
  const location = job.location?.display_name || 'Location not specified';
  const companyName = job.company?.display_name || 'Company not specified';
  const salary = job.salary_min ? `£${job.salary_min.toLocaleString()}+` : 'Salary negotiable';
  const contractType = job.contract_time?.replace('_', ' ') || 'Full time';

  const postedDate = new Date(job.created).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="job-card">
      <div className="job-card__header">
        {/* <img 
          src={companyLogo} 
          alt="Company logo" 
          className="job-card__logo"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/60';
          }}
        /> */}
        <div className="job-card__title-container">
          <h3 className="job-card__title">{job.title}</h3>
          <span className="job-card__company">{companyName}</span>
        </div>
      </div>

      <div className="job-card__details">
        <div className="job-card__detail-item">
          <LocationIcon />
          <span className="job-card__detail-text">{location}</span>
        </div>
        
        <div className="job-card__detail-item">
          <MoneyIcon />
          <span className="job-card__detail-text">{salary}</span>
        </div>

        <div className="job-card__meta-container">
          <span className="job-card__tag">{contractType}</span>
          <span className="job-card__date">Posted: {postedDate}</span>
        </div>
      </div>

      {job.description && (
        <div className="job-card__description">
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
      )}
    </div>
  );
};

// Icon components
const LocationIcon = () => (
  <svg className="job-card__icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const MoneyIcon = () => (
  <svg className="job-card__icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
);


export default JobCard;